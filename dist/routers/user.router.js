"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router
    .get('/', user_controller_1.getUsers)
    .get('/:id', user_controller_1.getUser)
    .post('/', user_controller_1.postUser)
    .put('/:id', user_controller_1.putUser)
    .delete('/:id', user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map