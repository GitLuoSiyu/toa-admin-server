<template>
  <div>
    <el-table ref="filterTable" :data="tableList" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" ></el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { message } from '@/api'

export default {
  data: () => ({
    tableList: [
      {
        date: "2016-05-02",
        name: "王小虎",
        zip: 200333,
        address: "上海市普陀区金沙江路 1518 弄",
        tag: "家",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        zip: 200333,
        address: "上海市普陀区金沙江路 1517 弄",
        tag: "公司",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        zip: 200333,
        address: "上海市普陀区金沙江路 1519 弄",
        tag: "家",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        zip: 200333,
        address: "上海市普陀区金沙江路 1516 弄",
        tag: "公司",
      },
    ],
  }),

  components: {},

  mounted() {
    this.init();
  },

  methods: {
    // 初始化
    async init() {
      await this.getTableList();
    },

    // 获取表单
    async getTableList() {
      console.log("获取表单数据");
    },

    // 编辑表单
    handleEdit() {
      console.log('编辑表单')

    },

    // 删除表单
    handleDelete() {
      console.log('删除表单')

    }
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped></style>
