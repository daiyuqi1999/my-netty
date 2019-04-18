package com.hunau.server;

import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.concurrent.GlobalEventExecutor;

/**
 * Created by MI on 2019/3/2.
 */
public class ServerConfig {
    // 储存每一个客户端接入进来时的channel对象
    public static ChannelGroup group = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
    // 服务器端号
    public static final int port = 8888;
    //websocket地址
    public static final String WEB_SOCKET_URL = "ws://localhost:" + port + "/websocket";
}
