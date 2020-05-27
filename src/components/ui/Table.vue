<style lang="scss" scoped></style>

<template>
  <table :class="cls()">
    <thead>
      <tr>
        <th
          scope="col"
          :class="headerCls(col)"
          v-for="(col, idx) in dataFormat"
          :key="idx"
          @click="
            (evt) => {
              col.sortable ? onSortHeaderClick(idx) : false;
            }
          "
        >
          {{ col.heading }}
          <i :class="headerIcon(col)" v-if="col.sortable"></i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rowData, ridx) in tableData" :key="ridx">
        <td v-for="(col, cidx) in dataFormat" :key="cidx">
          <slot :name="col.slot" :value="getCellValue(col, rowData)" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/*
  TODO
  BUG - if sortDirection isn't present in the format data, arrows don't work correctly on the header when sort clicks. Add validation step?
  */

/*
Format Data Example
  [{
    heading: 'Column Heading',
    slot: 'template_slot_name_for_custom_formatting',
      MUST match a template slot name
    path: null or ['path','to','data'],
      null passes entire row to the template as value for more complex cell rendering
      path allows complex, nested objects to be passed. Uses Ramda path to navigate.
    sortable: true if able to sort
    sortPath: ['path','to','data'],
      REQUIRED - path allows complex, nested objects to be searched rather than just the top level key. Uses Ramda path to navigate.
    sortDirection: -1 descending or 1 ascending
      REQUIRED - default sort direction
    sorted: true if sorted by default. only one in a table
  }, ...]


Example cell slot
  value will be the whole row if path is null or the data you pick with path
  <template v-slot:template_slot_name="{ value }">
    <p>{{ value }}</p>
  </template>
 */

import { path } from "ramda";
import { sortObjectArray } from "../../libs/sortObjectArray";

export default {
  name: "Table",
  components: {},
  props: {
    data: {
      type: Array,
      required: true,
    },
    format: {
      type: Array,
      required: true,
    },
    zebraRows: {
      type: Boolean,
      default: false,
    },
    zebraCols: {
      type: Boolean,
      default: false,
    },
    hoverRows: {
      type: Boolean,
      default: false,
    },
    alignTop: {
      type: Boolean,
      default: false,
    },
    sizeAuto: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dataFormat: this.format,
      tableData: this.applyDefaultSort(this.data),
      dataFilter: null,
    };
  },
  computed: {},
  methods: {
    cls() {
      return [
        "table",
        this.alignTop ? "top" : "",
        this.sizeAuto ? "auto" : "",
        this.zebraRows ? "zebra-rows" : "",
        this.zebraCols ? "zebra-cols" : "",
        this.hoverRows ? "hover-rows" : "",
      ].join(" ");
    },
    headerCls(col) {
      return [col.sortable ? "sortable" : "", col.sorted ? "sorted" : ""].join(
        " "
      );
    },
    headerIcon(col) {
      // BUG, if sortDirection not present, then it's always up
      if (col.sortable && col.sorted && col.sortDirection === -1) {
        return "fas fa-chevron-up sort-icon";
      } else if (col.sortable && col.sorted && col.sortDirection === 1) {
        return "fas fa-chevron-down sort-icon";
      } else if (col.sortable) {
        return "far fa-circle sort-icon";
      }
      return "";
    },
    getCellValue(col, cell) {
      if (col.hasOwnProperty("path") && col.path !== null) {
        return path(col.path, cell);
      }
      return cell;
    },
    applySort(column, data) {
      let sortPath = column.hasOwnProperty("sortPath")
        ? column.sortPath
        : column.hasOwnProperty("path")
        ? column.path
        : null;

      if (!sortPath) {
        console.error(
          `There is no path or sortPath for column ${column.heading}!`
        );
        return;
      }

      return sortObjectArray(sortPath, column.sortDirection, data);
    },
    applyDefaultSort(data) {
      // accessing prop not data because running in data init fn
      let firstSortHeader = this.format.reduce((acc, x, idx) => {
        if (x.sorted && acc === -1) {
          acc = idx;
        }
        return acc;
      }, -1);
      if (firstSortHeader !== -1) {
        return this.applySort(this.format[firstSortHeader], data);
      }
      return data;
    },
    onSortHeaderClick(colIdx) {
      let column = this.dataFormat[colIdx];
      if (column.sorted) {
        column.sortDirection = column.sortDirection === 1 ? -1 : 1;
      } else {
        this.clearColumnSorts();
        column.sorted = true;
        if (
          !column.hasOwnProperty("sort sortDirection") ||
          column.sortDirection === 0 ||
          column.sortDirection === null
        ) {
          column.sortDirection = 1;
        }
      }
      this.tableData = this.applySort(column, this.tableData);
    },
    clearColumnSorts() {
      this.dataFormat = this.dataFormat.map((col) => {
        if (col.sortable) {
          col.sorted = false;
        }
        return col;
      });
    },
  },
};
</script>
