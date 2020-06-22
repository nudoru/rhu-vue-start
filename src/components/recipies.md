# Component Recipes

## Status and Sizes

neutral, primary, secondary, white, info, success, warning, danger
xs,sm,md,lg,xl

## Loading Modal

```
// isLoading is a mapped getter from a Veux store
<Modal
        :visible="isLoading"
        nocontentpadding
>
    <div>
        <Loading v-if="isLoading" label="Loading survey details"/>
    </div>
</Modal>
```

## Utilities classes

- last updated 6/4/20

```
.text-ms16 {
  font-size: 4.877rem; }

.m-ms16 {
  margin: 4.877rem; }

.mt-ms16 {
  margin-top: 4.877rem; }

.mr-ms16 {
  margin-right: 4.877rem; }

.mb-ms16 {
  margin-bottom: 4.877rem; }

.ml-ms16 {
  margin-left: 4.877rem; }

.p-ms16 {
  padding: 4.877rem; }

.pt-ms16 {
  padding-top: 4.877rem; }

.pr-ms16 {
  padding-right: 4.877rem; }

.pb-ms16 {
  padding-bottom: 4.877rem; }

.pl-ms16 {
  padding-left: 4.877rem; }

.w-ms16 {
  width: 4.877rem; }

.h-ms16 {
  height: 4.877rem; }

.min-w-ms16 {
  min-width: 4.877rem; }

.max-w-ms16 {
  max-width: 4.877rem; }

.min-h-ms16 {
  min-height: 4.877rem; }

.max-h-ms16 {
  max-height: 4.877rem; }

.text-ms15 {
  font-size: 4.484rem; }

.m-ms15 {
  margin: 4.484rem; }

.mt-ms15 {
  margin-top: 4.484rem; }

.mr-ms15 {
  margin-right: 4.484rem; }

.mb-ms15 {
  margin-bottom: 4.484rem; }

.ml-ms15 {
  margin-left: 4.484rem; }

.p-ms15 {
  padding: 4.484rem; }

.pt-ms15 {
  padding-top: 4.484rem; }

.pr-ms15 {
  padding-right: 4.484rem; }

.pb-ms15 {
  padding-bottom: 4.484rem; }

.pl-ms15 {
  padding-left: 4.484rem; }

.w-ms15 {
  width: 4.484rem; }

.h-ms15 {
  height: 4.484rem; }

.min-w-ms15 {
  min-width: 4.484rem; }

.max-w-ms15 {
  max-width: 4.484rem; }

.min-h-ms15 {
  min-height: 4.484rem; }

.max-h-ms15 {
  max-height: 4.484rem; }

.text-ms14 {
  font-size: 3.907rem; }

.m-ms14 {
  margin: 3.907rem; }

.mt-ms14 {
  margin-top: 3.907rem; }

.mr-ms14 {
  margin-right: 3.907rem; }

.mb-ms14 {
  margin-bottom: 3.907rem; }

.ml-ms14 {
  margin-left: 3.907rem; }

.p-ms14 {
  padding: 3.907rem; }

.pt-ms14 {
  padding-top: 3.907rem; }

.pr-ms14 {
  padding-right: 3.907rem; }

.pb-ms14 {
  padding-bottom: 3.907rem; }

.pl-ms14 {
  padding-left: 3.907rem; }

.w-ms14 {
  width: 3.907rem; }

.h-ms14 {
  height: 3.907rem; }

.min-w-ms14 {
  min-width: 3.907rem; }

.max-w-ms14 {
  max-width: 3.907rem; }

.min-h-ms14 {
  min-height: 3.907rem; }

.max-h-ms14 {
  max-height: 3.907rem; }

.text-ms13 {
  font-size: 3.613rem; }

.m-ms13 {
  margin: 3.613rem; }

.mt-ms13 {
  margin-top: 3.613rem; }

.mr-ms13 {
  margin-right: 3.613rem; }

.mb-ms13 {
  margin-bottom: 3.613rem; }

.ml-ms13 {
  margin-left: 3.613rem; }

.p-ms13 {
  padding: 3.613rem; }

.pt-ms13 {
  padding-top: 3.613rem; }

.pr-ms13 {
  padding-right: 3.613rem; }

.pb-ms13 {
  padding-bottom: 3.613rem; }

.pl-ms13 {
  padding-left: 3.613rem; }

.w-ms13 {
  width: 3.613rem; }

.h-ms13 {
  height: 3.613rem; }

.min-w-ms13 {
  min-width: 3.613rem; }

.max-w-ms13 {
  max-width: 3.613rem; }

.min-h-ms13 {
  min-height: 3.613rem; }

.max-h-ms13 {
  max-height: 3.613rem; }

.text-ms12 {
  font-size: 3.322rem; }

.m-ms12 {
  margin: 3.322rem; }

.mt-ms12 {
  margin-top: 3.322rem; }

.mr-ms12 {
  margin-right: 3.322rem; }

.mb-ms12 {
  margin-bottom: 3.322rem; }

.ml-ms12 {
  margin-left: 3.322rem; }

.p-ms12 {
  padding: 3.322rem; }

.pt-ms12 {
  padding-top: 3.322rem; }

.pr-ms12 {
  padding-right: 3.322rem; }

.pb-ms12 {
  padding-bottom: 3.322rem; }

.pl-ms12 {
  padding-left: 3.322rem; }

.w-ms12 {
  width: 3.322rem; }

.h-ms12 {
  height: 3.322rem; }

.min-w-ms12 {
  min-width: 3.322rem; }

.max-w-ms12 {
  max-width: 3.322rem; }

.min-h-ms12 {
  min-height: 3.322rem; }

.max-h-ms12 {
  max-height: 3.322rem; }

.text-ms11 {
  font-size: 2.894rem; }

.m-ms11 {
  margin: 2.894rem; }

.mt-ms11 {
  margin-top: 2.894rem; }

.mr-ms11 {
  margin-right: 2.894rem; }

.mb-ms11 {
  margin-bottom: 2.894rem; }

.ml-ms11 {
  margin-left: 2.894rem; }

.p-ms11 {
  padding: 2.894rem; }

.pt-ms11 {
  padding-top: 2.894rem; }

.pr-ms11 {
  padding-right: 2.894rem; }

.pb-ms11 {
  padding-bottom: 2.894rem; }

.pl-ms11 {
  padding-left: 2.894rem; }

.w-ms11 {
  width: 2.894rem; }

.h-ms11 {
  height: 2.894rem; }

.min-w-ms11 {
  min-width: 2.894rem; }

.max-w-ms11 {
  max-width: 2.894rem; }

.min-h-ms11 {
  min-height: 2.894rem; }

.max-h-ms11 {
  max-height: 2.894rem; }

.text-ms10 {
  font-size: 2.676rem; }

.m-ms10 {
  margin: 2.676rem; }

.mt-ms10 {
  margin-top: 2.676rem; }

.mr-ms10 {
  margin-right: 2.676rem; }

.mb-ms10 {
  margin-bottom: 2.676rem; }

.ml-ms10 {
  margin-left: 2.676rem; }

.p-ms10 {
  padding: 2.676rem; }

.pt-ms10 {
  padding-top: 2.676rem; }

.pr-ms10 {
  padding-right: 2.676rem; }

.pb-ms10 {
  padding-bottom: 2.676rem; }

.pl-ms10 {
  padding-left: 2.676rem; }

.w-ms10 {
  width: 2.676rem; }

.h-ms10 {
  height: 2.676rem; }

.min-w-ms10 {
  min-width: 2.676rem; }

.max-w-ms10 {
  max-width: 2.676rem; }

.min-h-ms10 {
  min-height: 2.676rem; }

.max-h-ms10 {
  max-height: 2.676rem; }

.text-ms9 {
  font-size: 2.46rem; }

.m-ms9 {
  margin: 2.46rem; }

.mt-ms9 {
  margin-top: 2.46rem; }

.mr-ms9 {
  margin-right: 2.46rem; }

.mb-ms9 {
  margin-bottom: 2.46rem; }

.ml-ms9 {
  margin-left: 2.46rem; }

.p-ms9 {
  padding: 2.46rem; }

.pt-ms9 {
  padding-top: 2.46rem; }

.pr-ms9 {
  padding-right: 2.46rem; }

.pb-ms9 {
  padding-bottom: 2.46rem; }

.pl-ms9 {
  padding-left: 2.46rem; }

.w-ms9 {
  width: 2.46rem; }

.h-ms9 {
  height: 2.46rem; }

.min-w-ms9 {
  min-width: 2.46rem; }

.max-w-ms9 {
  max-width: 2.46rem; }

.min-h-ms9 {
  min-height: 2.46rem; }

.max-h-ms9 {
  max-height: 2.46rem; }

.text-ms8 {
  font-size: 2.144rem; }

.m-ms8 {
  margin: 2.144rem; }

.mt-ms8 {
  margin-top: 2.144rem; }

.mr-ms8 {
  margin-right: 2.144rem; }

.mb-ms8 {
  margin-bottom: 2.144rem; }

.ml-ms8 {
  margin-left: 2.144rem; }

.p-ms8 {
  padding: 2.144rem; }

.pt-ms8 {
  padding-top: 2.144rem; }

.pr-ms8 {
  padding-right: 2.144rem; }

.pb-ms8 {
  padding-bottom: 2.144rem; }

.pl-ms8 {
  padding-left: 2.144rem; }

.w-ms8 {
  width: 2.144rem; }

.h-ms8 {
  height: 2.144rem; }

.min-w-ms8 {
  min-width: 2.144rem; }

.max-w-ms8 {
  max-width: 2.144rem; }

.min-h-ms8 {
  min-height: 2.144rem; }

.max-h-ms8 {
  max-height: 2.144rem; }

.text-ms7 {
  font-size: 1.982rem; }

.m-ms7 {
  margin: 1.982rem; }

.mt-ms7 {
  margin-top: 1.982rem; }

.mr-ms7 {
  margin-right: 1.982rem; }

.mb-ms7 {
  margin-bottom: 1.982rem; }

.ml-ms7 {
  margin-left: 1.982rem; }

.p-ms7 {
  padding: 1.982rem; }

.pt-ms7 {
  padding-top: 1.982rem; }

.pr-ms7 {
  padding-right: 1.982rem; }

.pb-ms7 {
  padding-bottom: 1.982rem; }

.pl-ms7 {
  padding-left: 1.982rem; }

.w-ms7 {
  width: 1.982rem; }

.h-ms7 {
  height: 1.982rem; }

.min-w-ms7 {
  min-width: 1.982rem; }

.max-w-ms7 {
  max-width: 1.982rem; }

.min-h-ms7 {
  min-height: 1.982rem; }

.max-h-ms7 {
  max-height: 1.982rem; }

.text-ms6 {
  font-size: 1.823rem; }

.m-ms6 {
  margin: 1.823rem; }

.mt-ms6 {
  margin-top: 1.823rem; }

.mr-ms6 {
  margin-right: 1.823rem; }

.mb-ms6 {
  margin-bottom: 1.823rem; }

.ml-ms6 {
  margin-left: 1.823rem; }

.p-ms6 {
  padding: 1.823rem; }

.pt-ms6 {
  padding-top: 1.823rem; }

.pr-ms6 {
  padding-right: 1.823rem; }

.pb-ms6 {
  padding-bottom: 1.823rem; }

.pl-ms6 {
  padding-left: 1.823rem; }

.w-ms6 {
  width: 1.823rem; }

.h-ms6 {
  height: 1.823rem; }

.min-w-ms6 {
  min-width: 1.823rem; }

.max-w-ms6 {
  max-width: 1.823rem; }

.min-h-ms6 {
  min-height: 1.823rem; }

.max-h-ms6 {
  max-height: 1.823rem; }

.text-ms5 {
  font-size: 1.588rem; }

.m-ms5 {
  margin: 1.588rem; }

.mt-ms5 {
  margin-top: 1.588rem; }

.mr-ms5 {
  margin-right: 1.588rem; }

.mb-ms5 {
  margin-bottom: 1.588rem; }

.ml-ms5 {
  margin-left: 1.588rem; }

.p-ms5 {
  padding: 1.588rem; }

.pt-ms5 {
  padding-top: 1.588rem; }

.pr-ms5 {
  padding-right: 1.588rem; }

.pb-ms5 {
  padding-bottom: 1.588rem; }

.pl-ms5 {
  padding-left: 1.588rem; }

.w-ms5 {
  width: 1.588rem; }

.h-ms5 {
  height: 1.588rem; }

.min-w-ms5 {
  min-width: 1.588rem; }

.max-w-ms5 {
  max-width: 1.588rem; }

.min-h-ms5 {
  min-height: 1.588rem; }

.max-h-ms5 {
  max-height: 1.588rem; }

.text-ms4 {
  font-size: 1.468rem; }

.m-ms4 {
  margin: 1.468rem; }

.mt-ms4 {
  margin-top: 1.468rem; }

.mr-ms4 {
  margin-right: 1.468rem; }

.mb-ms4 {
  margin-bottom: 1.468rem; }

.ml-ms4 {
  margin-left: 1.468rem; }

.p-ms4 {
  padding: 1.468rem; }

.pt-ms4 {
  padding-top: 1.468rem; }

.pr-ms4 {
  padding-right: 1.468rem; }

.pb-ms4 {
  padding-bottom: 1.468rem; }

.pl-ms4 {
  padding-left: 1.468rem; }

.w-ms4 {
  width: 1.468rem; }

.h-ms4 {
  height: 1.468rem; }

.min-w-ms4 {
  min-width: 1.468rem; }

.max-w-ms4 {
  max-width: 1.468rem; }

.min-h-ms4 {
  min-height: 1.468rem; }

.max-h-ms4 {
  max-height: 1.468rem; }

.text-ms3 {
  font-size: 1.35rem; }

.m-ms3 {
  margin: 1.35rem; }

.mt-ms3 {
  margin-top: 1.35rem; }

.mr-ms3 {
  margin-right: 1.35rem; }

.mb-ms3 {
  margin-bottom: 1.35rem; }

.ml-ms3 {
  margin-left: 1.35rem; }

.p-ms3 {
  padding: 1.35rem; }

.pt-ms3 {
  padding-top: 1.35rem; }

.pr-ms3 {
  padding-right: 1.35rem; }

.pb-ms3 {
  padding-bottom: 1.35rem; }

.pl-ms3 {
  padding-left: 1.35rem; }

.w-ms3 {
  width: 1.35rem; }

.h-ms3 {
  height: 1.35rem; }

.min-w-ms3 {
  min-width: 1.35rem; }

.max-w-ms3 {
  max-width: 1.35rem; }

.min-h-ms3 {
  min-height: 1.35rem; }

.max-h-ms3 {
  max-height: 1.35rem; }

.text-ms2 {
  font-size: 1.176rem; }

.m-ms2 {
  margin: 1.176rem; }

.mt-ms2 {
  margin-top: 1.176rem; }

.mr-ms2 {
  margin-right: 1.176rem; }

.mb-ms2 {
  margin-bottom: 1.176rem; }

.ml-ms2 {
  margin-left: 1.176rem; }

.p-ms2 {
  padding: 1.176rem; }

.pt-ms2 {
  padding-top: 1.176rem; }

.pr-ms2 {
  padding-right: 1.176rem; }

.pb-ms2 {
  padding-bottom: 1.176rem; }

.pl-ms2 {
  padding-left: 1.176rem; }

.w-ms2 {
  width: 1.176rem; }

.h-ms2 {
  height: 1.176rem; }

.min-w-ms2 {
  min-width: 1.176rem; }

.max-w-ms2 {
  max-width: 1.176rem; }

.min-h-ms2 {
  min-height: 1.176rem; }

.max-h-ms2 {
  max-height: 1.176rem; }

.text-ms1 {
  font-size: 1.088rem; }

.m-ms1 {
  margin: 1.088rem; }

.mt-ms1 {
  margin-top: 1.088rem; }

.mr-ms1 {
  margin-right: 1.088rem; }

.mb-ms1 {
  margin-bottom: 1.088rem; }

.ml-ms1 {
  margin-left: 1.088rem; }

.p-ms1 {
  padding: 1.088rem; }

.pt-ms1 {
  padding-top: 1.088rem; }

.pr-ms1 {
  padding-right: 1.088rem; }

.pb-ms1 {
  padding-bottom: 1.088rem; }

.pl-ms1 {
  padding-left: 1.088rem; }

.w-ms1 {
  width: 1.088rem; }

.h-ms1 {
  height: 1.088rem; }

.min-w-ms1 {
  min-width: 1.088rem; }

.max-w-ms1 {
  max-width: 1.088rem; }

.min-h-ms1 {
  min-height: 1.088rem; }

.max-h-ms1 {
  max-height: 1.088rem; }

.text-ms0 {
  font-size: 1rem; }

.m-ms0 {
  margin: 1rem; }

.mt-ms0 {
  margin-top: 1rem; }

.mr-ms0 {
  margin-right: 1rem; }

.mb-ms0 {
  margin-bottom: 1rem; }

.ml-ms0 {
  margin-left: 1rem; }

.p-ms0 {
  padding: 1rem; }

.pt-ms0 {
  padding-top: 1rem; }

.pr-ms0 {
  padding-right: 1rem; }

.pb-ms0 {
  padding-bottom: 1rem; }

.pl-ms0 {
  padding-left: 1rem; }

.w-ms0 {
  width: 1rem; }

.h-ms0 {
  height: 1rem; }

.min-w-ms0 {
  min-width: 1rem; }

.max-w-ms0 {
  max-width: 1rem; }

.min-h-ms0 {
  min-height: 1rem; }

.max-h-ms0 {
  max-height: 1rem; }

.text-ms-1 {
  font-size: 0.871rem; }

.m-ms-1 {
  margin: 0.871rem; }

.mt-ms-1 {
  margin-top: 0.871rem; }

.mr-ms-1 {
  margin-right: 0.871rem; }

.mb-ms-1 {
  margin-bottom: 0.871rem; }

.ml-ms-1 {
  margin-left: 0.871rem; }

.p-ms-1 {
  padding: 0.871rem; }

.pt-ms-1 {
  padding-top: 0.871rem; }

.pr-ms-1 {
  padding-right: 0.871rem; }

.pb-ms-1 {
  padding-bottom: 0.871rem; }

.pl-ms-1 {
  padding-left: 0.871rem; }

.w-ms-1 {
  width: 0.871rem; }

.h-ms-1 {
  height: 0.871rem; }

.min-w-ms-1 {
  min-width: 0.871rem; }

.max-w-ms-1 {
  max-width: 0.871rem; }

.min-h-ms-1 {
  min-height: 0.871rem; }

.max-h-ms-1 {
  max-height: 0.871rem; }

.text-ms-2 {
  font-size: 0.806rem; }

.m-ms-2 {
  margin: 0.806rem; }

.mt-ms-2 {
  margin-top: 0.806rem; }

.mr-ms-2 {
  margin-right: 0.806rem; }

.mb-ms-2 {
  margin-bottom: 0.806rem; }

.ml-ms-2 {
  margin-left: 0.806rem; }

.p-ms-2 {
  padding: 0.806rem; }

.pt-ms-2 {
  padding-top: 0.806rem; }

.pr-ms-2 {
  padding-right: 0.806rem; }

.pb-ms-2 {
  padding-bottom: 0.806rem; }

.pl-ms-2 {
  padding-left: 0.806rem; }

.w-ms-2 {
  width: 0.806rem; }

.h-ms-2 {
  height: 0.806rem; }

.min-w-ms-2 {
  min-width: 0.806rem; }

.max-w-ms-2 {
  max-width: 0.806rem; }

.min-h-ms-2 {
  min-height: 0.806rem; }

.max-h-ms-2 {
  max-height: 0.806rem; }

.text-ms-3 {
  font-size: 0.741rem; }

.m-ms-3 {
  margin: 0.741rem; }

.mt-ms-3 {
  margin-top: 0.741rem; }

.mr-ms-3 {
  margin-right: 0.741rem; }

.mb-ms-3 {
  margin-bottom: 0.741rem; }

.ml-ms-3 {
  margin-left: 0.741rem; }

.p-ms-3 {
  padding: 0.741rem; }

.pt-ms-3 {
  padding-top: 0.741rem; }

.pr-ms-3 {
  padding-right: 0.741rem; }

.pb-ms-3 {
  padding-bottom: 0.741rem; }

.pl-ms-3 {
  padding-left: 0.741rem; }

.w-ms-3 {
  width: 0.741rem; }

.h-ms-3 {
  height: 0.741rem; }

.min-w-ms-3 {
  min-width: 0.741rem; }

.max-w-ms-3 {
  max-width: 0.741rem; }

.min-h-ms-3 {
  min-height: 0.741rem; }

.max-h-ms-3 {
  max-height: 0.741rem; }

.text-ms-4 {
  font-size: 0.645rem; }

.m-ms-4 {
  margin: 0.645rem; }

.mt-ms-4 {
  margin-top: 0.645rem; }

.mr-ms-4 {
  margin-right: 0.645rem; }

.mb-ms-4 {
  margin-bottom: 0.645rem; }

.ml-ms-4 {
  margin-left: 0.645rem; }

.p-ms-4 {
  padding: 0.645rem; }

.pt-ms-4 {
  padding-top: 0.645rem; }

.pr-ms-4 {
  padding-right: 0.645rem; }

.pb-ms-4 {
  padding-bottom: 0.645rem; }

.pl-ms-4 {
  padding-left: 0.645rem; }

.w-ms-4 {
  width: 0.645rem; }

.h-ms-4 {
  height: 0.645rem; }

.min-w-ms-4 {
  min-width: 0.645rem; }

.max-w-ms-4 {
  max-width: 0.645rem; }

.min-h-ms-4 {
  min-height: 0.645rem; }

.max-h-ms-4 {
  max-height: 0.645rem; }

.text-ms-5 {
  font-size: 0.597rem; }

.m-ms-5 {
  margin: 0.597rem; }

.mt-ms-5 {
  margin-top: 0.597rem; }

.mr-ms-5 {
  margin-right: 0.597rem; }

.mb-ms-5 {
  margin-bottom: 0.597rem; }

.ml-ms-5 {
  margin-left: 0.597rem; }

.p-ms-5 {
  padding: 0.597rem; }

.pt-ms-5 {
  padding-top: 0.597rem; }

.pr-ms-5 {
  padding-right: 0.597rem; }

.pb-ms-5 {
  padding-bottom: 0.597rem; }

.pl-ms-5 {
  padding-left: 0.597rem; }

.w-ms-5 {
  width: 0.597rem; }

.h-ms-5 {
  height: 0.597rem; }

.min-w-ms-5 {
  min-width: 0.597rem; }

.max-w-ms-5 {
  max-width: 0.597rem; }

.min-h-ms-5 {
  min-height: 0.597rem; }

.max-h-ms-5 {
  max-height: 0.597rem; }

.text-ms-6 {
  font-size: 0.549rem; }

.m-ms-6 {
  margin: 0.549rem; }

.mt-ms-6 {
  margin-top: 0.549rem; }

.mr-ms-6 {
  margin-right: 0.549rem; }

.mb-ms-6 {
  margin-bottom: 0.549rem; }

.ml-ms-6 {
  margin-left: 0.549rem; }

.p-ms-6 {
  padding: 0.549rem; }

.pt-ms-6 {
  padding-top: 0.549rem; }

.pr-ms-6 {
  padding-right: 0.549rem; }

.pb-ms-6 {
  padding-bottom: 0.549rem; }

.pl-ms-6 {
  padding-left: 0.549rem; }

.w-ms-6 {
  width: 0.549rem; }

.h-ms-6 {
  height: 0.549rem; }

.min-w-ms-6 {
  min-width: 0.549rem; }

.max-w-ms-6 {
  max-width: 0.549rem; }

.min-h-ms-6 {
  min-height: 0.549rem; }

.max-h-ms-6 {
  max-height: 0.549rem; }

.text-0 {
  font-size: 0; }

.m-0 {
  margin: 0; }

.mt-0 {
  margin-top: 0; }

.mr-0 {
  margin-right: 0; }

.mb-0 {
  margin-bottom: 0; }

.ml-0 {
  margin-left: 0; }

.p-0 {
  padding: 0; }

.pt-0 {
  padding-top: 0; }

.pr-0 {
  padding-right: 0; }

.pb-0 {
  padding-bottom: 0; }

.pl-0 {
  padding-left: 0; }

.w-0 {
  width: 0; }

.h-0 {
  height: 0; }

.min-w-0 {
  min-width: 0; }

.max-w-0 {
  max-width: 0; }

.min-h-0 {
  min-height: 0; }

.max-h-0 {
  max-height: 0; }

.w-auto {
  width: auto; }

.w-screen {
  width: 100vw; }

.w-full {
  width: 100%; }

.h-auto {
  height: auto; }

.h-screen {
  height: 100vh; }

.h-full {
  height: 100%; }

.min-w-auto {
  min-width: auto; }

.min-w-screen {
  min-width: 100vw; }

.min-w-full {
  min-width: 100%; }

.max-w-auto {
  max-width: auto; }

.max-w-screen {
  max-width: 100vw; }

.max-w-full {
  max-width: 100%; }

.min-h-auto {
  min-height: auto; }

.min-h-screen {
  min-height: 100vh; }

.min-h-full {
  min-height: 100%; }

.max-h-auto {
  max-height: auto; }

.max-h-screen {
  max-height: 100vh; }

.max-h-full {
  max-height: 100%; }

.text-left {
  text-align: left; }

.text-right {
  text-align: right; }

.text-center {
  text-align: center; }

.text-light {
  font-weight: 400; }

.text-normal {
  font-weight: 500; }

.text-bold {
  font-weight: 600; }

.uppercase {
  text-transform: uppercase; }

.lowercase {
  text-transform: lowercase; }

.capitalize {
  text-transform: capitalize; }

.normal-case {
  text-transform: none; }

.tracking-tighter {
  letter-spacing: -0.05rem; }

.tracking-tight {
  letter-spacing: -0.025rem; }

.tracking-normal {
  letter-spacing: 0; }

.tracking-wide {
  letter-spacing: 0.025rem; }

.tracking-wider {
  letter-spacing: 0.05rem; }

.tracking-widest {
  letter-spacing: 0.1rem; }

.leading-none {
  line-height: 1; }

.leading-tight {
  line-height: 1.25; }

.leading-snug {
  line-height: 1.375; }

.leading-normal {
  line-height: 1.5; }

.leading-relaxed {
  line-height: 1.625; }

.leading-loose {
  line-height: 2; }

.leading-3 {
  line-height: 0.75rem; }

.leading-4 {
  line-height: 1rem; }

.leading-5 {
  line-height: 1.25rem; }

.leading-6 {
  line-height: 1.5rem; }

.leading-7 {
  line-height: 1.75rem; }

.leading-8 {
  line-height: 2rem; }

.leading-9 {
  line-height: 2.25rem; }

.leading-10 {
  line-height: 2.5rem; }

.text-neutral {
  color: #f3f3f3; }

.bg-neutral {
  background-color: #f3f3f3; }

.border-neutral {
  border: 1ps solid #f3f3f3; }

.border-r-neutral {
  border: 1px solid #f3f3f3;
  border-radius: 0.25rem; }

.text-primary {
  color: #0499c5; }

.bg-primary {
  background-color: #0499c5; }

.border-primary {
  border: 1ps solid #0499c5; }

.border-r-primary {
  border: 1px solid #0499c5;
  border-radius: 0.25rem; }

.text-secondary {
  color: #5e40be; }

.bg-secondary {
  background-color: #5e40be; }

.border-secondary {
  border: 1ps solid #5e40be; }

.border-r-secondary {
  border: 1px solid #5e40be;
  border-radius: 0.25rem; }

.text-white {
  color: #fff; }

.bg-white {
  background-color: #fff; }

.border-white {
  border: 1ps solid #fff; }

.border-r-white {
  border: 1px solid #fff;
  border-radius: 0.25rem; }

.text-info {
  color: #0499c5; }

.bg-info {
  background-color: #0499c5; }

.border-info {
  border: 1ps solid #0499c5; }

.border-r-info {
  border: 1px solid #0499c5;
  border-radius: 0.25rem; }

.text-success {
  color: #689b7a; }

.bg-success {
  background-color: #689b7a; }

.border-success {
  border: 1ps solid #689b7a; }

.border-r-success {
  border: 1px solid #689b7a;
  border-radius: 0.25rem; }

.text-warning {
  color: #faaa4f; }

.bg-warning {
  background-color: #faaa4f; }

.border-warning {
  border: 1ps solid #faaa4f; }

.border-r-warning {
  border: 1px solid #faaa4f;
  border-radius: 0.25rem; }

.text-danger {
  color: #be0000; }

.bg-danger {
  background-color: #be0000; }

.border-danger {
  border: 1ps solid #be0000; }

.border-r-danger {
  border: 1px solid #be0000;
  border-radius: 0.25rem; }

.overflow-auto {
  overflow: auto; }

.overflow-visible {
  overflow: visible; }

.overflow-hidden {
  overflow: hidden; }

.overflow-scroll {
  overflow: scroll; }

.overflow-x-auto {
  overflow: auto; }

.overflow-x-visible {
  overflow: visible; }

.overflow-x-hidden {
  overflow: hidden; }

.overflow-x-scroll {
  overflow: scroll; }

.overflow-y-auto {
  overflow: auto; }

.overflow-y-visible {
  overflow: visible; }

.overflow-y-hidden {
  overflow: hidden; }

.overflow-y-scroll {
  overflow: scroll; }

.font-heading {
  font-family: "Red Hat Display", sans-serif; }

.font-base {
  font-family: "Red Hat Text", sans-serif; }

.font-mono {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500; }
```