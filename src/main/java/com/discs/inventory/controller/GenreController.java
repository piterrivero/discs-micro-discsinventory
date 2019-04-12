package com.discs.inventory.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.BasicJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.discs.inventory.model.Genre;
import com.discs.inventory.proxies.GenresServiceProxy;

@RestController
public class GenreController {

	  private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	  @Autowired
	  private GenresServiceProxy genresProxy;
	  
	  private List<Genre> genreList;
	  
	  @RequestMapping(value="/genres")
	  public ModelAndView genres() {
		  ModelAndView modelAndView = new ModelAndView();
		  modelAndView.setViewName("genres");
		  
		  genreList = new ArrayList<Genre>();
		  
		  String response = genresProxy.list("ASC");
		  		  
		  JsonParser jsonParser = new BasicJsonParser();
		  Map<String, Object> jsonMap = null;

		  jsonMap = jsonParser.parseMap(response);
			  
		  logger.info("---------------"+jsonMap.get("responsePort"));
		  
//		  List<LinkedHashMap> tempList = (List<LinkedHashMap>) jsonMap.get("genreList");
//		    
//		  Genre genre = null;
//		  
//		  for (LinkedHashMap element : tempList)  {
//			  genre = new Genre();
//			  genre.setIdGenre(Long.parseLong(element.get("idGenre").toString()));
//			  genre.setGenre(element.get("genre").toString());
//			  genreList.add(genre);
//		  }
		  
	      return modelAndView;
	}
	

	public List<Genre> getGenreList() {
		return genreList;
	}
	
	public void setGenreList(List<Genre> genreList) {
		this.genreList = genreList;
	}
}
