import React from 'react'
import beer from './../../../resources/images/Story.png'
import image5 from './../../../resources/images/image 5.svg'
import image6 from './../../../resources/images/image 6.svg'
import image15 from './../../../resources/images/image 15.svg'
import image16 from './../../../resources/images/image 16.svg'
import image17 from './../../../resources/images/image 17.svg'
export default function Story() {
  return (
    <div className="story">
      <div className="story__intro">
        <img src={beer} alt="" className="story__intro__img" />
        <div className="story__intro__container">
          <h1 className="story__intro__container__header">The Story</h1>
          <div className="story__intro__container__content">
            Shirrel Rhoades, former Executive Vice President of Marvel
            Entertainment and Stan Lee's handpicked successor as Publisher of
            Marvel Comics, now Director of Stan Lee Holdings Ltd, owner of the
            Stan Lee CYBERspace Collection, has partnered with Immortals Group
            Pty. LTD. to market its unique collection of all of the Super Hero
            creative assets produced by Stan Lee Media between 1999 and 2001.
            <br />
            <br />
            The Super Hero world will be astonished to learn that in 2000 Stan
            Lee and his Hollywood-based Internet animation studio of 150
            artists, writers and flash animation wizards, was experimenting with
            reinventing the super hero yet again through interactive animation
            story telling for the Internet.
          </div>
        </div>
      </div>
      <div className="story__content">
        <div className="story__content-left">
          <h3 className="story__content-left__header">millennial culture</h3>
          <div className="story__content-left__content">
            Stan and Will created Slam-Girl late in the year 2000 to experiment
            with interactive, Internet based digital animation to reinvent the
            ‘60s comic book-originated Peter Parker-styled Super Hero. This time
            Stan adopted the perspective of a millennial slacker feminist
            20-something anti-super heroine. In effect, we wondered how a
            feminist slacker from the millennial generation would relate to the
            burdens created by the uninvited imposition of multiple super powers
            that would complicate her mundane existence in the 21st century.
          </div>
        </div>
        <div className="story__content-right">
          <img src={image5} alt="" className="img-5" />
          <img src={image6} alt="" className="img-6" />
        </div>
      </div>
      <div className="story__footer">
        <img src={image16} alt="" className="image-16" />
        <img src={image15} alt="" className="image-15" />
        <img src={image17} alt="" className="image-17" />
      </div>
    </div>
  )
}
