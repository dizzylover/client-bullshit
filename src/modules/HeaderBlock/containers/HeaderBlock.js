import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from 'components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
    const postId = pathname.split('/post/')[1];
    return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0]
};

HeaderBlock.defaultProps = {
    title:'Блог криворукости',
    description: 'Такие руки да только молотком',
    imageUrl: 'https://images.unsplash.com/photo-1539946309076-4daf2ea73899?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
 };

export default withRouter(connect(mapStateToProps)(HeaderBlock));