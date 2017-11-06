package icom.sea.dream.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by sea on 2017/10/30.
 */
public class ConfigUtil extends Properties{
    public ConfigUtil() {
        InputStream is = getClass().getResourceAsStream("/config.properties");
        try {
            load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
