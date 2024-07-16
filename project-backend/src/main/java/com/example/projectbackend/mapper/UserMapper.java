package com.example.projectbackend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.projectbackend.entity.User;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    List<User> selectByName(String name);
}