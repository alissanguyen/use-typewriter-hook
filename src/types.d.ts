import React from "react";

export interface TypewriterConfig {
  /**
   * text to type out
   * @default null
   */
  targetText: string;
  /**
   * Amout of milliseconds delay at the start of the typewriter effect
   */
  autoStartDelay: number;
  /**
   * Amount of milliseconds delay beteen each char.
   * @default 200
   */
  typingDelayMillis: number;
  /**
   * Warpper classname, use for styling
   */
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
