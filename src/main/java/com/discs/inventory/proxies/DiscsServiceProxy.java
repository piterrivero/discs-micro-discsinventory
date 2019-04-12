package com.discs.inventory.proxies;

import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name="discs-service")
@RibbonClient(name="discs-service")
public interface DiscsServiceProxy {

	@GetMapping("/discs/test")
	public String test();
	
	@RequestMapping(value = "/discs/list")
	public String list(@RequestParam String order);
	
}
