import React, { Component, Fragment } from 'react';
import { Image, Show } from '../../models/tv.models';

// type Props = {
//   image: Show['image'];
//   name: string;
// };

type Props = Pick<Show, 'name' | 'image'>;

export class Poster extends Component<Props> {
  render() {
    const { image, name, children } = this.props;
    const medium = image ? image.medium : 'http://placekitten.com/210/295';

    return (
      <>
        <img className="img-fluid mb-3" src={medium} alt="" />
        {children}
        <h3 className="h5">{name}</h3>
      </>
    );
  }
}
