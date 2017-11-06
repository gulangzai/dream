package icom.sea.dream.dao;

import icom.sea.dream.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by sea on 2017/10/30.
 */
@Repository
public class ProductDao extends BaseDao{

    public List<Product> list(Integer type) {
        if(type==0)
            return find("from Product");
        return find("from Product where type=?",type);
    }

}
