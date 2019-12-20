<template>
  <div class="container">
    <div class="welcome">{{welcomeMessage}}</div>

    <div>
      <div class="form-group row">
        <label for="Name" class="col-sm-1">Title</label>
        <br />
        <label for="Name" class="col-sm-1">Count: {{Count}}</label>
        <div class="col-sm-4">
          <input type="text" id="Name" v-model="model.Name" class="form-control" />
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            id="isCompleted"
            v-model="model.IsCompleted"
            class="form-check-input"
          />
          <label for="isCompleted" class="form-check-label">Completed</label>
        </div>
      </div>
      <div>
        <button type="submit" @click="AddToDo()" class="btn btn-primary">Add ToDo</button>
      </div>
      <div>
        <button type="submit" @click="DeleteToDo()" class="btn btn-primary">Delete Last ToDo</button>
      </div>
    </div>

    <section>
      <ol class="list-group">
        <li
          class="list-group-item"
          v-for="todo of ToDos"
          :key="todo.Name"
        >{{ todo.Name}}, {{ todo.IsCompleted ? "Completed" : "Not Done" }}</li>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Todo } from '../interfaces/interfaces';
import store from '../store/index';

@Component({
  components: {},
})
export default class HelloWorld extends Vue {
  private welcomeMessage: string;
  private message: string;
  private todos: Todo[];
  private model: Todo;
  private countToDo: Number;

  constructor() {
    super();
    this.welcomeMessage = 'Welcome to ToDo App!';
    this.todos = [];
    this.model = {
      Name: '',
      IsCompleted: false,
    };
    this.message = '';
    this.countToDo = 0;
  }

  get ToDos(): Todo[] {
    const todos = this.$store.state.todos; // this.todos;
    return todos;
  }

  get Count(): Number {
    const counts = this.$store.getters.getTotal;
    return counts;
  }

  public AddToDo() {
    this.message = `Adding ${this.model.Name} to ToDo List ...`;
    if (this.ToDos.some((x) => x.Name == this.model.Name)) {
      this.message = `ToDo item ${this.model.Name} already exists in your list`;
      return;
    }
    // this.todos.push(this.model);
    this.$store
      .dispatch('addToDo', this.model)
      .then(() => {
        this.message = 'ToDo added successfully to your list';
        setTimeout(() => {
          this.message = '';
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
    this.model = {
      Name: '',
      IsCompleted: false,
    };
  }

  public DeleteToDo() {
    this.$store
      .dispatch('deleteToDo')
      .then(() => {
        this.message = 'ToDo deleted successfully in your list';
        setTimeout(() => {
          this.message = '';
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
    this.model = {
      Name: '',
      IsCompleted: false,
    };
  }
}
</script>

<style scoped>
.welcome {
  color: #090629e5;
  margin: 20px;
  font-size: 20px;
}
.message {
  margin: 20px;
  font-size: 14px;
}
section {
  margin: 20px;
}
ol.list-group li:nth-of-type(even) {
  background: #cdecda;
}
</style>