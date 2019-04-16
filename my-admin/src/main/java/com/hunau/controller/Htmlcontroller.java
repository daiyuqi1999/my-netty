package com.hunau.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.concurrent.Callable;

/**
 * Created by MI on 2019/2/1.
 * HTML页面跳转
 */
@Controller
public class Htmlcontroller {

    @RequestMapping(value = "/") // 将index.html设置为主界面
    public Callable<String> index() {
        Callable<String> callable = new Callable<String>() {
            @Override
            public String call() throws Exception {
                return "netty";
            }
        };
        return callable;
    }

}
