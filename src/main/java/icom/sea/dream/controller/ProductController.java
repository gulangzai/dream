package icom.sea.dream.controller;

import icom.sea.dream.entity.resp.RespProduct;
import icom.sea.dream.service.ProductService;
import icom.sea.dream.util.ConfigUtil;
import icom.sea.dream.util.IDGenertor;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sea on 2017/10/30.
 */
@Controller
@RequestMapping
public class ProductController {

    @Resource
    private ProductService productService;

    @RequestMapping("/test")
    public String test(){
        System.out.println(".......");
        Map<String,String> map = new HashMap<String, String>();
        map.put("tets","sdf");
        return "test";
    }

    @RequestMapping("/t")
    public ModelAndView t(){
        return new ModelAndView("t");
    }


  /*  @RequestMapping(value = "/list")
    public String list(@RequestParam(defaultValue = "1")Integer type,
                       @RequestParam(defaultValue = "1") int currentPage,
                       @RequestParam(defaultValue = "20") int pageSize,Model model){
       model = productService.list(type,currentPage,pageSize,model);
        return "list";
    }*/


   /* @RequestMapping("/del/{id}")
    public String del(@PathVariable int id, @RequestParam(defaultValue = "1") int type){
        productService.del(id);
        return "redirect:/list?type="+type;
    }*/


    /**
     * 鑾峰彇棣栭〉鐨勪綔鍝佸垪琛紝2灞忥紝22涓�(鍓嶅彴棣栭〉)
     * @return
     */
    @RequestMapping("/shouyeProductList")
    @ResponseBody
    public Map<String,?> shouyeProductList(HttpSession session){
        String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        return productService.shouyeProductList(lang);
    }

    /**
     * 鑾峰彇棣栭〉鐨勪綔鍝佸垪琛紝2灞忥紝22涓�(鍓嶅彴棣栭〉)
     * @return
     */
    @RequestMapping("/index")
    public String shouyeProductList(HttpSession session,Model model){
        String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        model = productService.shouyeProductList(lang,model);
        return "index";
    }

    @RequestMapping("/abous")
    public String abous(){
        return "abous";
    }

    @RequestMapping("/business")
    public String business(){
        return "business";
    }

    /**
     * 浣滃搧鍒楄〃(鍓嶅彴浣滃搧鍒楄〃椤甸潰)
     * @param type
     * @param model
     * @return
     */
    @RequestMapping("/list")
    public String list(@RequestParam(defaultValue = "1")Integer type, HttpSession session, Model model){
       // String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        //model = productService.list(lang,type,model);
        return "list";
    }

    @RequestMapping("/list2")
    @ResponseBody
    public List<RespProduct> list2(Integer type, HttpSession session){
        String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        return productService.list(lang,type);
    }

    /**
     * 浣滃搧璇︽儏椤甸潰(鍓嶅彴浣滃搧璇︽儏椤�)
     * @param id
     * @param model
     * @return
     */
    @RequestMapping("/productInfo/{id}")
    public String productInfo(@PathVariable int id,HttpSession session, Model model){
        String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        model = productService.productInfo(lang,id, model);
        model.addAttribute("id",id);
        return "details";
    }


    /**
     * 璇ユ帴鍙ｄ笉闇�瑕佷簡
     * @param id
     * @return
     */
    @RequestMapping("/shouyeProductImg/{id}")
    @ResponseBody
    public Map<String,?> shouyeProductImg(@PathVariable int id){
        return productService.shouyeProductImg(id);
    }


  /*  @RequestMapping("/productInfo/{id}")
    @ResponseBody
    public Map<String,?> productInfo(@PathVariable int id){
        return productService.productInfo(id);
    }
*/

    @RequestMapping(value = "/admin-list",method = RequestMethod.GET) 
    public String adminList(@RequestParam(defaultValue = "1")Integer type,
            @RequestParam(defaultValue = "1") int currentPage,
            @RequestParam(defaultValue = "20") int pageSize,Model model,HttpSession session){
     return "admin-list";
    }
    
   
    @RequestMapping(value = "/adminData",method = RequestMethod.GET)
    @ResponseBody
    public List<RespProduct> adminData(@RequestParam(defaultValue = "1")Integer type,
            @RequestParam(defaultValue = "1") int currentPage,
            @RequestParam(defaultValue = "20") int pageSize,Model model,HttpSession session){
        String lang = null == session.getAttribute("lang")?"en":session.getAttribute("lang")+"";
        Map<String,?> map  = productService.adminList(lang,type,currentPage,pageSize);
        model.addAllAttributes(map);
        return (List<RespProduct>) map.get("list"); 
    }
    
    @RequestMapping(value = "/admin-add",method = RequestMethod.GET)
    public String adminAdd(){
        return "admin-des";
    }
    

    @RequestMapping(value = "/admin-edit",method = RequestMethod.GET)
    public String adminEdit(){
        return "admin-des";
    }

  
    @RequestMapping(value = "/admin-delete/{id}",method = RequestMethod.GET)
    @ResponseBody
    public  Map<String,?> adminDelete(@PathVariable int id){ 
        return  productService.del(id);
    }

    /**
     * 鑾峰彇浜у搧鍒楄〃(鍚庡彴灞曠ず)
     * @param type
     * @param currentPage
     * @param pageSize
     * @return
     */
    @RequestMapping("/getList")
    @ResponseBody
    public Map<String,?> list(@RequestParam(defaultValue = "1")Integer type,
                              @RequestParam(defaultValue = "1") int currentPage,
                              @RequestParam(defaultValue = "20") int pageSize){
        return productService.list(type,currentPage,pageSize);
    }

    /**
     * 鍒犻櫎浣滃搧(鍚庡彴)
     * @param id
     * @return
     */
    @RequestMapping("/del/{id}")
    @ResponseBody
    public Map<String,?> del(@PathVariable int id){
        return productService.del(id);
        //  return "redirect:/list?type="+type;
    }
    /**
     * 鑾峰彇浜у搧淇℃伅(鍚庡彴)
     * @param id
     * @return
     */
    @RequestMapping("/productInfo2/{id}")
    @ResponseBody
    public Map<String,?> productInfo(@PathVariable int id){
        return productService.productInfo(id);
        //    model.addAttribute("id",id);
        //    return "edit";
    }

    /**
     * 缂栬緫浣滃搧(鍚庡彴)
     * @param id
     * @param en_title
     * @param zh_title
     * @param type
     * @param en_type
     * @param zh_type
     * @param en_label1
     * @param zh_label1
     * @param en_label2
     * @param zh_label2
     * @param en_label3
     * @param zh_label3
     * @param en_descript
     * @param zh_descript
     * @param imgUrl
     * @param dimension
     * @param isHomePage
     * @param num
     * @param productImgs
     * @return
     */
    @RequestMapping(value = "/edit",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,?> edit(int id,String en_title, String zh_title, int type, String en_type, String zh_type,
                             String en_label1, String zh_label1, String en_label2, String zh_label2,
                             String en_label3, String zh_label3, String en_descript, String zh_descript,
                             String imgUrl, @RequestParam(defaultValue = "2") int dimension,
                             @RequestParam(defaultValue = "1") int isHomePage,
                             @RequestParam(defaultValue = "0") int num, @RequestParam(value = "productImgs[]") String[] productImgs){
        Map<String,String> map = new HashMap<String, String>();
        if("".equalsIgnoreCase(en_type)){
            map.put("msg","请选择作品分类");
            return map;
        }
        if(null == zh_title || "".equalsIgnoreCase(zh_title)){
            map.put("msg","请填写作品中文标题");
            return map;
        }
        if(null == en_title || "".equalsIgnoreCase(en_title)){
            map.put("msg","请填写作品引文标题");
            return map;
        }
        if(null == zh_descript || "".equalsIgnoreCase(zh_descript)){
            map.put("msg","请填写作品中文描述");
            return map;
        }
        if(null == en_descript || "".equalsIgnoreCase(en_descript)){
            map.put("msg","请填写作品引文描述");
            return map;
        }
        if(null == imgUrl || "".equalsIgnoreCase(imgUrl)){
            map.put("msg","请上传作品封面图片");
            return map;
        }
        return productService.edit(id, en_title,  zh_title,  type,  en_type,  zh_type,
                en_label1,  zh_label1,  en_label2,  zh_label2,
                en_label3,  zh_label3, en_descript,  zh_descript,
                imgUrl,  dimension, isHomePage,
                num,  productImgs);
    }

    /**
     * 娣诲姞浣滃搧(鍚庡彴)
     * @param en_title
     * @param zh_title
     * @param type
     * @param en_type
     * @param zh_type
     * @param en_label1
     * @param zh_label1
     * @param en_label2
     * @param zh_label2
     * @param en_label3
     * @param zh_label3
     * @param en_descript
     * @param zh_descript
     * @param imgUrl
     * @param dimension
     * @param isHomePage
     * @param num
     * @param productImgs
     * @return
     */
    @RequestMapping(value = "/add",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,?> add(String en_title, String zh_title, int type, String en_type, String zh_type,
                             String en_label1, String zh_label1, String en_label2, String zh_label2,
                             String en_label3, String zh_label3, String en_descript, String zh_descript,
                             String imgUrl, @RequestParam(defaultValue = "2") int dimension,
                             @RequestParam(defaultValue = "1") int isHomePage,
                             @RequestParam(defaultValue = "0") int num, @RequestParam(value = "productImgs[]") String[] productImgs){
        Map<String,String> map = new HashMap<String, String>();
        if("".equalsIgnoreCase(en_type)){
            map.put("msg","请选择作品分类");
            return map;
        }
        if(null == zh_title || "".equalsIgnoreCase(zh_title)){
            map.put("msg","请填写作品中文标题");
            return map;
        }
        if(null == en_title || "".equalsIgnoreCase(en_title)){
            map.put("msg","请填写作品引文标题");
            return map;
        }
        if(null == zh_descript || "".equalsIgnoreCase(zh_descript)){
            map.put("msg","请填写作品中文描述");
            return map;
        }
        if(null == en_descript || "".equalsIgnoreCase(en_descript)){
            map.put("msg","请填写作品引文描述");
            return map;
        }
        if(null == imgUrl || "".equalsIgnoreCase(imgUrl)){
            map.put("msg","请上传作品封面图片");
            return map;
        }
        return productService.add( en_title,  zh_title,  type,  en_type,  zh_type,
                 en_label1,  zh_label1,  en_label2,  zh_label2,
                 en_label3,  zh_label3, en_descript,  zh_descript,
                 imgUrl,  dimension, isHomePage,
         num,  productImgs);
    }

    /**
     * 涓婁紶鍥剧墖(鍚庡彴)
     * @param file
     * @return
     * @throws IOException
     */
    @RequestMapping(value="/imgUpload",method=RequestMethod.POST)
    @ResponseBody
    public String fileUpload(@RequestParam(value = "file") MultipartFile file){
        System.out.println("come in ");
        ConfigUtil configUtil = new ConfigUtil();
        String	fileName = new SimpleDateFormat("YYYYMMDDHHmmss").format(new Date())+"_main_"+ IDGenertor.getOrderId()+"."+configUtil.getProperty("suffix");
        File targetFile = new File(configUtil.getProperty("imgPath"), fileName);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        try {
            file.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
        } 
        Map map = new HashMap();  
        String result = "success";  
        map.put("data", result);  
        map.put("img", configUtil.getProperty("imgHttp")+fileName); 
        String jsonStr = String.valueOf(new JSONObject(map));
        return jsonStr; 
    }

/*
    @RequestMapping(value="/productImgsUpload",method=RequestMethod.POST)
    @ResponseBody
    public String fileUpload2(@RequestParam(value = "file") MultipartFile file) throws IOException {
        System.out.println("come in ");
        ConfigUtil configUtil = new ConfigUtil();
        String	fileName = new SimpleDateFormat("YYYYMMDDHHmmss").format(new Date())+"_main_"+ IDGenertor.getOrderId()+"."+configUtil.getProperty("suffix");
        File targetFile = new File(configUtil.getProperty("imgPath"), fileName);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        try {
            file.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return configUtil.getProperty("imgHttp")+fileName;
    }*/
}
