<template>
  <div>
    <el-table :data="manyTableData" :border="true" stripe>
      <el-table-column type="expand">
        <template v-slot="scope">
          <!-- 显示参数标签 -->
          <el-tag v-for="(item, i) in scope.row.attr_vals" :key="i" closable>
            {{ item }}
          </el-tag>
          <!-- 新增属性标签 -->
          <el-input class="input-new-tag" v-if="scope.row.inputVisible" v-model="scope.row.inputValue"
            ref="saveTagInput" size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else size="small" @click="showInput(scope.row)">+ New Tag</el-button>
        </template>
      </el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="参数名称" prop="attr_name"></el-table-column>
      <el-table-column label="操作">
        <!-- <template v-slot="scope"> -->
        <el-button type="primary" icon="Edit">编 辑</el-button>
        <el-button type="danger" icon="Delete">删 除</el-button>
        <!-- </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      manyTableData: [
        {
          'attr_id': 3077,
          'attr_name': '版式',
          'cat_id': 6,
          'attr_sel': 'many',
          'attr_write': 'list',
          'attr_vals': [
            '49吋4K超薄曲面',
            '人工智能,55吋4K观影曲面',
            '30核HDR,55吋4K超薄曲面',
            '人工智能,65吋4K超薄曲面',
            '人工智能'
          ],
          'delete_time': null,
          'inputVisible': false,
          'inputValue': ''
        },
        {
          'attr_id': 3803,
          'attr_name': '颜色',
          'cat_id': 6,
          'attr_sel': 'many',
          'attr_write': 'list',
          'attr_vals': [],
          'delete_time': null,
          'inputVisible': false,
          'inputValue': ''
        },
        {
          'attr_id': 3804,
          'attr_name': '款式',
          'cat_id': 6,
          'attr_sel': 'many',
          'attr_write': 'list',
          'attr_vals': [],
          'delete_time': null,
          'inputVisible': false,
          'inputValue': ''
        }
      ]
    }
  },
  methods: {
    showInput(row) {
      row.inputVisible = true
      console.log(row);
    },
    handleInputConfirm() {
      console.log('输入触发');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
