package icom.sea.dream.service;

import icom.sea.dream.dao.ProductDao;
import icom.sea.dream.entity.Product;
import icom.sea.dream.entity.ProductImg;
import icom.sea.dream.entity.resp.RespProduct;
import org.apache.commons.collections.map.HashedMap;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sea on 2017/10/30.
 */
@Service
public class ProductService {

    @Resource
    private ProductDao productDao;

    public Model list(Integer type, Model model) {
        List<Product> list = productDao.list(type);
        model.addAttribute("list",list);

        return model;
    }

    public Model list(String lang,Integer type, Model model) {
        List<Product> list = productDao.list(type);
        List<RespProduct> list2 = new ArrayList<RespProduct>();
        for(Product product : list){
            RespProduct respProduct = new RespProduct(lang,product);
            list2.add(respProduct);
        }
        model.addAttribute("list",list2);
        return model;
    }

    public  List<RespProduct> list(String lang,Integer type) {
        List<Product> list = productDao.list(type);
        List<RespProduct> list2 = new ArrayList<RespProduct>();
        for(Product product : list){
            RespProduct respProduct = new RespProduct(lang,product);
            list2.add(respProduct);
        }
       return list2;
    }

    public String del(int id) {

        Product product = productDao.get(Product.class,id);
        if(null != product){
            List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
            if(null != productImgs && productImgs.size()>0){
                productDao.deleteAll(productImgs);
            }
            productDao.delete(product);
        }
        return "list";
    }

    public Model productInfo(int id, Model model) {
        Product product = productDao.get(Product.class,id);
        model.addAttribute("product",product);
        List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
        model.addAttribute("productImgs",productImgs);
        return model;
    }

    public Model productInfo(String lang,int id, Model model) {
        Product product = productDao.get(Product.class,id);
        RespProduct respProduct = new RespProduct(lang,product);
        model.addAttribute("product",respProduct);
        List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
        model.addAttribute("productImgs",productImgs);
        return model;
    }
    
    public Model getProductInfo(int id, Model model) {
        Product product = productDao.get(Product.class,id); 
        model.addAttribute("product",product);
        List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
        model.addAttribute("productImgs",productImgs);
        return model;
    }

    public Map<String,?> list(Integer type, int currentPage, int pageSize) {
        Map<String,Object> map = new HashedMap();
        List<Product> list = productDao.findSplit("from Product where type=?",currentPage,pageSize,type);
        Long t = productDao.total("select count(id) from Product where type=?",type);
        int total = (null == t)?0:Integer.parseInt(""+t);
        map.put("list",list);
        map.put("currentPage",currentPage);
        map.put("pageSize",pageSize);
        map.put("totalPage", total%pageSize==0?total/pageSize:total/pageSize+1);
        return map;
    }
    
    public Map<String,?> adminList(String lang,Integer type, int currentPage, int pageSize) {
        Map<String,Object> map = new HashedMap();
        List<Product> list = productDao.findSplit("from Product where type=?",currentPage,pageSize,type);
        List<RespProduct> respProductList = new ArrayList();
        Long t = productDao.total("select count(id) from Product where type=?",type);
        int total = (null == t)?0:Integer.parseInt(""+t);
        for(Product product : list){
            RespProduct respProduct = new RespProduct(lang,product);
            respProductList.add(respProduct);
        }
        map.put("list",respProductList);
        map.put("currentPage",currentPage);
        map.put("pageSize",pageSize);
        map.put("totalPage", total%pageSize==0?total/pageSize:total/pageSize+1);
        return map;
    }
    

    public Model list(Integer type, int currentPage, int pageSize, Model model) {
        List<Product> list = productDao.findSplit("from Product where type=?",currentPage,pageSize,type);
        Long t = productDao.total("select count(id) from Product where type=?",type);
        int total = (null == t)?0:Integer.parseInt(""+t);
        
        model.addAttribute("list",list);
        model.addAttribute("currentPage",currentPage);
        model.addAttribute("pageSize",pageSize);
        model.addAttribute("totalPage", total%pageSize==0?total/pageSize:total/pageSize+1);

        return model;
    }

    public Map<String,?> productInfo(int id) {
        Map<String,Object> map = new HashedMap();
        Product product = productDao.get(Product.class,id);
        map.put("product",product);
        List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
        map.put("productImgs",productImgs);
        return map;
    }

    public Map<String,?> add(String en_title, String zh_title, int type, String en_type, String zh_type,
                             String en_label1, String zh_label1, String en_label2, String zh_label2, String en_label3,
                             String zh_label3, String en_descript, String zh_descript, String imgUrl,String picUrl, int dimension,
                             int isHomePage, int num, String[] productImgs) {
        Map<String,String> map = new HashedMap();
        Product product = new Product();
        product.setEn_title(en_title);
        product.setZh_title(zh_title);
        product.setType(type);
        product.setEn_type(en_type);
        product.setZh_type(zh_type);
        product.setEn_label1(en_label1);
        product.setZh_label1(zh_label1);
        product.setEn_label2(en_label2);
        product.setZh_label2(zh_label2);
        product.setEn_label3(en_label3);
        product.setZh_label3(zh_label3);
        product.setDimension(dimension);
        product.setEn_descript(en_descript);
        product.setZh_descript(zh_descript);
        product.setImgUrl(imgUrl);
        product.setPicUrl(picUrl);
        product.setIsHomePage(isHomePage);
        if(isHomePage==0)
            num=0;

        int time = (int)(System.currentTimeMillis()/1000);
        product.setTime(time);
        if(isHomePage==1 && num>0){
            productDao.update("update Product set num=0 where dimension=? and num=?",dimension,num);
        }
        System.out.println(num+" ,,,,,,,,,,,,,,,,,");
        product.setNum(num);
        Serializable id = productDao.save(product);
        for(String img : productImgs){
            ProductImg productImg = new ProductImg();
            productImg.setImgUrl(img);
            productImg.setProductId(Integer.parseInt(""+id));
            productDao.save(productImg);
        }
        map.put("msg","添加成功!");
        return map;
    }

    public Map<String,?> shouyeProductList() {
        Map<String,Object> map = new HashMap<String, Object>();
        List<Product> list2 = productDao.find("from Product where dimension=? and num>? order by num",2,0);
        List<Product> list3 = productDao.find("from Product where dimension=? and num>? order by num",3,0);
        map.put("list2",list2);
        map.put("list3",list3);
        return map;
    }

    public Map<String,?> shouyeProductList(String lang) {
        Map<String,Object> map = new HashMap<String, Object>();
        List<Product> productList2 = productDao.find("from Product where dimension=? and num>? order by num",2,0);
        List<RespProduct> list2 = new ArrayList<RespProduct>();
        for (Product product : productList2){
            RespProduct respProduct = new RespProduct(lang,product);
            list2.add(respProduct);
        }
        List<Product> productList3 = productDao.find("from Product where dimension=? and num>? order by num",3,0);
        List<RespProduct> list3 = new ArrayList<RespProduct>();
        for (Product product : productList3){
            RespProduct respProduct = new RespProduct(lang,product);
            list3.add(respProduct);
        }
        map.put("list2",list2);
        map.put("list3",list3);
        return map;
    }

    public Model shouyeProductList(Model model) {

        List<Product> list2 = productDao.find("from Product where dimension=? and num>? order by num",2,0);
        List<Product> list3 = productDao.find("from Product where dimension=? and num>? order by num",3,0);

        model.addAttribute("list2",list2);
        model.addAttribute("list3",list3);
        return model;
    }

    public Model shouyeProductList(String lang,Model model) {
        List<Product> productList2 = productDao.find("from Product where dimension=? and num>? order by num",2,0);
        List<Product> productList3 = productDao.find("from Product where dimension=? and num>? order by num",3,0);
        List<RespProduct> list2 = new ArrayList<RespProduct>();
        for (Product product : productList2){
            RespProduct respProduct = new RespProduct(lang,product);
         //   list2.add(respProduct);
            model.addAttribute("p2"+respProduct.getNum(),respProduct);
        }
        List<RespProduct> list3 = new ArrayList<RespProduct>();
        for (Product product : productList3){
            RespProduct respProduct = new RespProduct(lang,product);
       //     list3.add(respProduct);
            model.addAttribute("p3"+respProduct.getNum(),respProduct);
        }
      //  model.addAttribute("list2",list2);
       // model.addAttribute("list3",list3);
        return model;
    }


    public Map<String,?> edit(int id, String en_title, String zh_title, int type, String en_type,
                              String zh_type, String en_label1, String zh_label1, String en_label2, String zh_label2,
                              String en_label3, String zh_label3, String en_descript, String zh_descript, String imgUrl,String picUrl,
                              int dimension, int isHomePage, int num, String[] productImgs) {
        Product product =productDao.get(Product.class,id);
        if(null != product){
            product.setEn_title(en_title);
            product.setZh_title(zh_title);
            product.setType(type);
            product.setEn_type(en_type);
            product.setZh_type(zh_type);
            product.setEn_label1(en_label1);
            product.setZh_label1(zh_label1);
            product.setEn_label2(en_label2);
            product.setZh_label2(zh_label2);
            product.setEn_label3(en_label3);
            product.setZh_label3(zh_label3);
            product.setDimension(dimension);
            product.setEn_descript(en_descript);
            product.setZh_descript(zh_descript);
            product.setImgUrl(imgUrl);
            product.setPicUrl(picUrl);
            product.setIsHomePage(isHomePage);
            if(isHomePage==0) 
                num=0;  
            if(isHomePage==1 && num>0){
                productDao.update("update Product set num=0 where dimension=? and num=?",dimension,num);
                productDao.update("update Product set num=? where id=?",num,product.getId());
            }
            System.err.println(num);
          //  product.setNum(num);
            productDao.update(product);
            List<ProductImg> productImgsList = productDao.find("from ProductImg where productId=?",id);
            if(null != productImgsList && productImgsList.size()>0){
                productDao.deleteAll(productImgsList);
            }
            for(String img : productImgs){
                ProductImg productImg = new ProductImg();
                productImg.setImgUrl(img);
                productImg.setProductId(id);
                productDao.save(productImg);
            }
        }
       Map<String,String> map = new HashMap<String, String>();
        map.put("msg","编辑成功");
        return map;
    }

    public Map<String,?> shouyeProductImg(int id) {
        Map<String,Object> map = new HashedMap();
        List<ProductImg> productImgs = productDao.find("from ProductImg where productId=?",id);
        map.put("productImgs",productImgs);
        return map;
    }
}
