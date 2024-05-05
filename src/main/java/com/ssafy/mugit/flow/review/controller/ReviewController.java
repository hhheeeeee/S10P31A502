package com.ssafy.mugit.flow.review.controller;

import com.ssafy.mugit.flow.review.dto.RequestCreateReviewDto;
import com.ssafy.mugit.flow.review.dto.ReviewDto;
import com.ssafy.mugit.flow.review.service.ReviewService;
import com.ssafy.mugit.global.config.UserSession;
import com.ssafy.mugit.global.dto.ListDto;
import com.ssafy.mugit.global.dto.MessageDto;
import com.ssafy.mugit.global.dto.UserSessionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping("/flows/{flowId}")
    ResponseEntity<MessageDto> createReview(
            @UserSession UserSessionDto user,
            @PathVariable("flowId") Long flowId,
            @RequestBody RequestCreateReviewDto requestCreateReviewDto) {
        reviewService.createReview(user.getId(), flowId, requestCreateReviewDto);
        return ResponseEntity.status(201).body(new MessageDto("리뷰 생성 성공"));
    }

    @DeleteMapping("/{reviewId}")
    ResponseEntity<MessageDto> deleteReview(
            @UserSession UserSessionDto user,
            @PathVariable("reviewId") Long reviewId) {
        reviewService.eraseReview(user.getId(), reviewId);
        return ResponseEntity.status(201).body(new MessageDto("리뷰 삭제 성공"));
    }

    @GetMapping("/flows/{flowId}")
    ResponseEntity<ListDto<List<ReviewDto>>> listReview(@PathVariable("flowId") Long flowId) {
        return ResponseEntity.status(200).body(new ListDto<>(reviewService.listReview(flowId)));
    }
}
