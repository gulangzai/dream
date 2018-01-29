package icom.sea.dream.entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * Created by sea on 2017/10/30.
 */
@Entity
@Table(name="product")
@DynamicUpdate
public class Product implements Serializable{
    private Integer id;
    private String en_title;
    private String zh_title;
    private Integer type;
    private String en_type;
    private String zh_type;
    private String en_label1;
    private String zh_label1;
    private String en_label2;
    private String zh_label2;
    private String en_label3;
    private String zh_label3;
    private String en_descript;
    private String zh_descript;
    private String imgUrl;
    private String picUrl;
    private Integer dimension;
    private Integer isHomePage;
    private Integer num;
    private Integer time;

    @Id
    @GeneratedValue
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEn_title() {
        return en_title;
    }

    public void setEn_title(String en_title) {
        this.en_title = en_title;
    }

    public String getZh_title() {
        return zh_title;
    }

    public void setZh_title(String zh_title) {
        this.zh_title = zh_title;
    }

    public String getEn_type() {
        return en_type;
    }

    public void setEn_type(String en_type) {
        this.en_type = en_type;
    }

    public String getZh_type() {
        return zh_type;
    }

    public void setZh_type(String zh_type) {
        this.zh_type = zh_type;
    }

    public String getEn_label1() {
        return en_label1;
    }

    public void setEn_label1(String en_label1) {
        this.en_label1 = en_label1;
    }

    public String getZh_label1() {
        return zh_label1;
    }

    public void setZh_label1(String zh_label1) {
        this.zh_label1 = zh_label1;
    }

    public String getEn_label2() {
        return en_label2;
    }

    public void setEn_label2(String en_label2) {
        this.en_label2 = en_label2;
    }

    public String getZh_label2() {
        return zh_label2;
    }

    public void setZh_label2(String zh_label2) {
        this.zh_label2 = zh_label2;
    }

    public String getEn_label3() {
        return en_label3;
    }

    public void setEn_label3(String en_label3) {
        this.en_label3 = en_label3;
    }

    public String getZh_label3() {
        return zh_label3;
    }

    public void setZh_label3(String zh_label3) {
        this.zh_label3 = zh_label3;
    }

    public String getEn_descript() {
        return en_descript;
    }

    public void setEn_descript(String en_descript) {
        this.en_descript = en_descript;
    }

    public String getZh_descript() {
        return zh_descript;
    }

    public void setZh_descript(String zh_descript) {
        this.zh_descript = zh_descript;
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

    public Integer getIsHomePage() {
        return isHomePage;
    }

    public void setIsHomePage(Integer isHomePage) {
        this.isHomePage = isHomePage;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }
}
