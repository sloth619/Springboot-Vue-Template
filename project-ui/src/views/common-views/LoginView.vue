<template>
  <div class="login-page">
    <div class="content">
      <h2>用户列表</h2>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button @click="editUser(user)">编辑</button>
            <button @click="deleteUser(user.id)">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="form">
        <h3>{{ formTitle }}</h3>
        <input v-model="formData.name" placeholder="姓名" />
        <input v-model="formData.age" placeholder="年龄" />
        <input v-model="formData.address" placeholder="地址" />
        <button @click="submitForm">{{ formButton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
  name: "LoginView",
  data() {
    return {
      users: [],
      formData: {
        id: null,
        name: '',
        age: '',
        address: ''
      },
      formTitle: '添加用户',
      formButton: '添加'
    };
  },
  methods: {
    fetchUsers() {
      axios.get('/user')
          .then(response => {
            this.users = response.data.data;
          })
          .catch(error => {
            console.error("获取用户数据失败", error);
          });
    },
    submitForm() {
      if (this.formData.id) {
        // 更新用户
        axios.put('/user', this.formData)
            .then(() => {
              this.fetchUsers();
              this.resetForm();
            })
            .catch(error => {
              console.error("更新用户失败", error);
            });
      } else {
        // 添加用户
        axios.post('/user', this.formData)
            .then(() => {
              this.fetchUsers();
              this.resetForm();
            })
            .catch(error => {
              console.error("添加用户失败", error);
            });
      }
    },
    editUser(user) {
      this.formData = { ...user };
      this.formTitle = '编辑用户';
      this.formButton = '更新';
    },
    deleteUser(id) {
      axios.delete(`/user/${id}`)
          .then(() => {
            this.fetchUsers();
          })
          .catch(error => {
            console.error("删除用户失败", error);
          });
    },
    resetForm() {
      this.formData = { id: null, name: '', age: '', address: '' };
      this.formTitle = '添加用户';
      this.formButton = '添加';
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
.content {
  background-color: #cccccc;
  padding: 20px;
  border-radius: 8px;
}
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}
button {
  margin-right: 8px;
}
.form {
  margin-top: 20px;
}
</style>
