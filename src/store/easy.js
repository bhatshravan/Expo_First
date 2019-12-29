import { createStore, action } from 'easy-peasy';

const store = createStore({
  todos: {
    items: ['res1', 'res2', 'res3'],
    add: action((state, payload) => {
      state.items.push(payload);
    }),
  },

	user: 'shravan',
	
	users: ['sh1','sh2']
});

export default store;
