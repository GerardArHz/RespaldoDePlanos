import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    marginLeft: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '98%',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://images.unsplash.com/photo-1496054967538-14294f2376b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a720734bfad8df98edbafa7fbf56311&auto=format&fit=crop&w=1117&q=80',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://images.unsplash.com/photo-1496054967538-14294f2376b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a720734bfad8df98edbafa7fbf56311&auto=format&fit=crop&w=1117&q=80',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://images.unsplash.com/photo-1505773573366-a42de6e725d4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eba4d3eb718ea2c2311660e2faa463a2&auto=format&fit=crop&w=800&q=80',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const ListGaleria = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>

  </div>
);

export default ListGaleria;
