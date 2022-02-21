import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart, CallMissedSharp} from '@material-ui/icons';

import useStyles from './styles';

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();

    return str.replace( /(<([^>]+)>)/ig, '');
}

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image.url} title={product.name}></CardMedia>
                <CardContent>
                    <Typography variant='subtitle1' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color='textSecondary' gutterBottom>{removeTags(product.description)}</Typography>
                    <div className={classes.cardContent}>
                        <Typography variant='h5'>
                            {product.price.formatted_with_symbol}
                        </Typography>
                        <CardActions disableSpacing className={classes.cardActions}>
                            <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                                <AddShoppingCart />
                            </IconButton>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
