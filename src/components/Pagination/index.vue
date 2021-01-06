<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    layout: {
      type: String,
      default: "prev, pager, next,total, jumper"
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.pageIndex;
      }
      // set (val) {
      //   debugger
      //   this.$emit('update:pageIndex', val)
      // }
    },
    pageSizes: {
      get() {
        return this.pageSize;
      }
      // set (val) {
      //   this.$emit('update:pageSize', val)
      // }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("update:pageSize", val);
      this.$emit("PageSizeChange", val);
      // this.$emit('PageSizeChange', { pageIndex: this.currentPage, pageSize: val })
    },
    handleCurrentChange(val) {
      this.$emit("update:pageIndex", val);
      this.$emit("PageIndexChange", val);
      // this.$emit('PageIndexChange', { pageIndex: val, pageSize: this.pageSizes })
    }
  }
};
</script>

<style scoped lang="scss">
.pagination-container {
  background: transparent;
  text-align: center;
  margin-top: 20px;
}
/deep/.el-pagination__total {
  color: white;
}
/deep/ .el-pagination__jump {
  color: white;
}
/deep/ .el-pagination button:disabled {
  background: transparent;
}
/deep/ .el-pager li {
  background: transparent !important;
}
/deep/ .el-input__inner {
  background: transparent !important;
  border: 1px solid #0e6fd8;
  color: white;
}
.pagination-container.hidden {
  display: none;
}
</style>
