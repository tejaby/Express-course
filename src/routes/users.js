function userRoutes(app) {
  app.get("/user", (req, res) => {
    const users = [
      {
        id: 1,
        name: "yostin",
      },
      {
        id: 2,
        name: "selvin",
      },
    ];
    res.render("user", {users});
  });
}

module.exports = userRoutes;
