import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop9.module.css';
import { Group152Icon } from './Group152Icon';
import { Group252Icon } from './Group252Icon';
import { Vector1Icon } from './Vector1Icon';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 32:42 */
export const Desktop9: FC<Props> = memo(function Desktop9(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.school_bus_wallpaper_0201}></div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      <div className={classes.logo}>Logo</div>
      <div className={classes.unsplashTde6e7dBngc}></div>
      <div className={classes.signUp}>Sign up</div>
      <div className={classes._3}></div>
      <div className={classes._2}></div>
      <div className={classes._12}></div>
      <div className={classes._13}></div>
      <div className={classes._4}></div>
      <div className={classes._14}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.signUp2}>Sign up</div>
      <div className={classes.eMAIL}>EMAIL</div>
      <div className={classes.rectangle26}></div>
      <div className={classes.enterYourEMail}>Enter your E-mail</div>
      <div className={classes.uSERNAME}>USERNAME</div>
      <div className={classes.rectangle25}></div>
      <div className={classes.enterYourName}>Enter your Name</div>
      <div className={classes.bASSWORD}>BASSWORD</div>
      <div className={classes.rectangle27}></div>
      <div className={classes.enterYourPassword}>Enter your Password</div>
      <div className={classes.aDDRESS}>ADDRESS</div>
      <div className={classes.rectangle31}></div>
      <div className={classes.enterYourAddress}>Enter your Address</div>
      <div className={classes.pHONENUMBER}>PHONE NUMBER</div>
      <div className={classes.rectangle312}></div>
      <div className={classes.enterYourPhone}>Enter your phone</div>
      <div className={classes.day}>Day</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.bIRTHDAY}>
        <div className={classes.textBlock}>BIRTHDAY</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.month}>Month</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.year}>Year</div>
      <div className={classes.alreadyHaveAnAccountLogin}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Already have an account? </span>
          <span className={classes.label2}>Login.</span>
        </p>
      </div>
      <div className={classes.line3}></div>
      <div className={classes.line4}></div>
      <div className={classes.orEmail}>
        <div className={classes.textBlock3}>Or </div>
        <div className={classes.textBlock4}>Email</div>
      </div>
      <div className={classes.rectangle313}></div>
      <div className={classes.continueWithFacebook}>
        <div className={classes.textBlock5}>Continue with Facebook</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle32}></div>
      <div className={classes.continueWithGoogle}>
        <div className={classes.textBlock7}>Continue with Google</div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <div className={classes.group252}>
        <Group252Icon className={classes.icon2} />
      </div>
      <div className={classes.group152}>
        <Group152Icon className={classes.icon3} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
    </div>
  );
});
