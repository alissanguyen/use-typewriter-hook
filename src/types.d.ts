import React from "react";

export interface TypewriterConfig {
  /**
   * text to type out
   * @default null
   */
  targetText: string;
  /**
   *
   */
  startDelayMillis: number;
  /**
   * Amount of milliseconds delay beteen each char.
   * @default 200
   */
  typingDelayMillis: number;

  wrapperClassName: string;
  // /**
  //  * String value to use as the cursor
  //  */
  // cursor?: string;
  // /**
  //    * The delay between deleting each character.
  //    *
  //    * @default "natural"
  //    */
  //  deleteSpeed?: Speed
  //  /**
  //   * Whether to keep looping or not.
  //   *
  //   * @default false
  //   */
  //  loop?: boolean
  //  /**
  //   * Whether to autostart typing strings or not. You are required to provide
  //   * strings option.
  //   *
  //   * @default false
  //   */
  //  autoStart?: boolean
}
