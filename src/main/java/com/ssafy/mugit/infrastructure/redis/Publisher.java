package com.ssafy.mugit.infrastructure.redis;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Publisher {

    private final RedisTemplate<String, Object> redisTemplate;

    @Value("${redis.topic}")
    private String topic;

    public void publish(String message) {
        redisTemplate.convertAndSend(topic, message);
    }
}
