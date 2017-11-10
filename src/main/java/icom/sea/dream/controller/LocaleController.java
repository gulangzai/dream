package icom.sea.dream.controller;

import java.util.Locale;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.support.RequestContext;
  
@Controller  
@RequestMapping
public class LocaleController {  

 //   @Resource
//    private LocaleResolver localeResolver;

    @RequestMapping(value="/change", method = {RequestMethod.GET})
    public String change(HttpServletRequest request, Model model, @RequestParam(value="lang", defaultValue="zh") String lang, @RequestParam(defaultValue = "index") String view){
            if(lang.equals("zh")){
                Locale locale = new Locale("zh", "CN");
                request.getSession().setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME,locale);
                request.getSession().setAttribute("lang","zh");
            }
            else if(lang.equals("en")){
                Locale locale = new Locale("en", "US");
                request.getSession().setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME,locale);
                request.getSession().setAttribute("lang","en");
            }
            else
                request.getSession().setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, LocaleContextHolder.getLocale());
            //从后台代码获取国际化信息
            RequestContext requestContext = new RequestContext(request);

        return view;
    }

}  