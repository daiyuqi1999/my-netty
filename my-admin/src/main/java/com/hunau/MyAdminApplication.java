package com.hunau;

import com.hunau.server.ServerMain;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.hunau.mapper")
@SpringBootApplication
public class MyAdminApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyAdminApplication.class, args);
        ServerMain.start();
	}

}
