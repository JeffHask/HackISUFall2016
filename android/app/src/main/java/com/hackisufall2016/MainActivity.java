package com.hackisufall2016;

import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.zmxv.RNSound.RNSoundPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HackISUFall2016";
    }

     @Override
        public void onActivityResult(int requestCode, int resultCode, Intent data) {
            super.onActivityResult(requestCode, resultCode, data);
            MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
        }
}
