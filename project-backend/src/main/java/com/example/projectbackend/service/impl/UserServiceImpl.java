package com.example.projectbackend.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.projectbackend.entity.User;
import com.example.projectbackend.mapper.UserMapper;
import com.example.projectbackend.service.UserService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Override
    public List<User> getUsersByName(String name) {
        return baseMapper.selectByName(name);
    }
}