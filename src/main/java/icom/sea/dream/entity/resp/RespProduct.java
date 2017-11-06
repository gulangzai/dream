package icom.sea.dream.entity.resp;

import icom.sea.dream.entity.Product;

/**
 * Created by sea on 2017/11/6.
 */
public class RespProduct {
    private Integer id;
    private String title;
    private Integer typeId;
    private String type;
    private String label1;
    private String label2;
    private String label3;
    private String descript;
    private String imgUrl;
    private Integer dimension;
    private Integer isHomePage;
    private Integer num;
    private Integer time;

    public RespProduct(String lang, Product product) {
        this.id = product.getId();
        this.title = lang.equals("en")?product.getEn_title():product.getZh_title();
        this.typeId = product.getType();
        this.type =  lang.equals("en")?product.getEn_type():product.getZh_type();
        this.label1 =  lang.equals("en")?product.getEn_label1():product.getZh_label1();
        this.label2 =  lang.equals("en")?product.getEn_label2():product.getZh_label2();
        this.label3 =  lang.equals("en")?product.getEn_label3():product.getZh_label3();
        this.descript = lang.equals("en")?product.getEn_descript():product.getZh_descript();
        this.imgUrl = product.getImgUrl();
        this.dimension = product.getDimension();
        this.isHomePage = product.getIsHomePage();
        this.num = product.getNum();
        this.time = product.getTime();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLabel1() {
        return label1;
    }

    public void setLabel1(String label1) {
        this.label1 = label1;
    }

    public String getLabel2() {
        return label2;
    }

    public void setLabel2(String label2) {
        this.label2 = label2;
    }

    public String getLabel3() {
        return label3;
    }

    public void setLabel3(String label3) {
        this.label3 = label3;
    }

    public String getDescript() {
        return descript;
    }

    public void setDescript(String descript) {
        this.descript = descript;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Integer getDimension() {
        return dimension;
    }

    public void setDimension(Integer dimension) {
        this.dimension = dimension;
    }

    public Integer getIsHomePage() {
        return isHomePage;
    }

    public void setIsHomePage(Integer isHomePage) {
        this.isHomePage = isHomePage;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }
}
