<style lang="scss" scoped>
    .csv-upload {
        display: inline-block;
        .title {
            font-size: $font-size-normal;
            margin: 0;
            margin-right: $scale0;
            display: inline-block;
            top: -50%;
            transform: translateY(50%);
        }
        .file-upload {
        }
    }
</style>

<template>
    <div class="csv-upload">
        <p class="title"><slot/></p>
            <label class="file-upload">
                <input type="file" :id="uniqueId"
                       :aria-label="label"
                       @change="onFileChange" ref="input">
                <span class="file-custom">
                    <span class="code-inline" v-if="this.uploadedFile !== null">{{fileName}}</span>
                    <span v-else>{{fileName}}</span>
                </span>
            </label>
    </div>
</template>

<script>

  import {createId} from "../../libs/uiComponentUtilities";

  export default {
    name      : 'CSVUpload',
    components: {},
    props     : {
      label: {
        type   : String,
        default: 'Upload CSV file'
      }
    },
    data() {
      return {
        uploadedFile: null,
        fileReader  : null,
        fileData: null
      };
    },
    computed  : {
      uniqueId() {
        return this.id ? this.id : createId("cb");
      },
      fileName() {
        if (this.uploadedFile) {
          return this.uploadedFile.name;
        }
        return 'Choose file ...';
      }
    },
    methods   : {
      onFileChange(evt) {
        let input = evt.currentTarget; //this.$refs.input.$el;
        if (input.files && input.files[0]) {
          let myFile = input.files[0];
          this.fileReader = new FileReader();
          this.uploadedFile = myFile;
          this.fileReader.addEventListener('load', this.parseUploadedFile);
          this.fileReader.readAsBinaryString(myFile);
        }
      },
      parseUploadedFile(e) {
        let parsedata = e.target.result.split("\n").reduce((acc,c) => {
          acc.push(c.split(','));
          return acc;
        }, []);
        this.fileData = parsedata;
        this.fileReader.removeEventListener('load', this.parseUploadedFile);
        // console.table(parsedata);
        this.$emit('change',this.fileData);
      }
    }
  };
</script>