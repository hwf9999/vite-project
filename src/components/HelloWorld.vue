<template>
  <div>
    <vxe-table :data="tableData">
      <vxe-column type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="name" fixed="left"></vxe-column>
      <vxe-colgroup title="基本信息">
        <template #header>
          <table style="width: 100%">
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </template>
        <vxe-colgroup title="详细信息" align="center">
          <vxe-column field="123123213" title="123123123"></vxe-column>
          <vxe-column field="address1" title="address"></vxe-column>
          <vxe-column field="1231232134" title="123123123"></vxe-column>
          <vxe-column field="1231232134" title="123123123"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    const tableData = [
      {
        id: 10001,
        name: "Test1",
        role: "Develop",
        sex: "Man",
        age: 28,
        address: "test abc",
      },
      {
        id: 10002,
        name: "Test2",
        role: "Test",
        sex: "Women",
        age: 22,
        address: "Guangzhou",
      },
      {
        id: 10003,
        name: "Test3",
        role: "PM",
        sex: "Man",
        age: 32,
        address: "Shanghai",
      },
      {
        id: 10004,
        name: "Test4",
        role: "Designer",
        sex: "Women",
        age: 24,
        address: "Shanghai",
      },
    ];
    return {
      tableData,
    };
  },
};
</script>