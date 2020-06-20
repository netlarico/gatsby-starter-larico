import React, { Component } from "react";
import {
  WhatsappShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from "react-share";
import config from "../../../config";

class Share extends Component {
  render() {
    const { title, slug, excerpt, mobile } = this.props;
    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const url = config.siteUrl + realPrefix + slug;

    const iconSize = mobile ? 36 : 32;
    const filter = (count) => (count > 0 ? count : "");

    return (
      <div className="social-links">
        <h4>Share on:</h4>
        <RedditShareButton url={url} title={title}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>
            {(count) => <div className="share-count">{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round size={iconSize} />
        </WhatsappShareButton>

        <FacebookMessengerShareButton url={url} title={title}>
          <FacebookMessengerIcon round size={iconSize} />
        </FacebookMessengerShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {(count) => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton url={url} title={title} description={excerpt}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    );
  }
}

export default Share;
