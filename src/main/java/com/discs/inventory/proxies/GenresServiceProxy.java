package com.discs.inventory.proxies;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="genres-service")
@RibbonClient(name="genres-service")
public interface GenresServiceProxy {

	@GetMapping("/genres/test")
	public String test();
	
	@RequestMapping(value = "/genres/list")
	public String list(@RequestParam String order);
	
}
