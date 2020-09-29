package com.adapaydemo;

import android.widget.Toast;

import com.alibaba.fastjson.JSON;
import com.chinapnr.android.adapay.AdaPay;
import com.chinapnr.android.adapay.PayCallback;
import com.chinapnr.android.adapay.bean.PayResult;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PayModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  public PayModule(ReactApplicationContext reactContext) {
    super(reactContext);
    reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "AdaPay";
  }

  @ReactMethod
  public void doPay(String json, Callback callback) {
    AdaPay.doPay(getCurrentActivity(), json, payResult -> callback.invoke(JSON.toJSONString(payResult)));
  }
}
