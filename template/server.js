// index.js
module.exports = () => {
  const data = { users: [], renatos: [] };
  // Create 1000 users
  for (let i = 0; i < 95; i++) {
    data.users.push({ id: i, name: i, lastname: `${i}user` });
  }

  return data;
};
