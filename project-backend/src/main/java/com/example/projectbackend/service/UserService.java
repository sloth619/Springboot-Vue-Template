package com.example.projectbackend.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.projectbackend.entity.User;
import java.util.List;

public interface UserService extends IService<User> {
    List<User> getUsersByName(String name);
}