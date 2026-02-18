module.exports = {
  turbopack: {
    // 示例：添加别名和自定义文件扩展名
    resolveAlias: {
      underscore: 'lodash',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
  },
}