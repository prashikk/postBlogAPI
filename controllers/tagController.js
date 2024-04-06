// controllers/tagController.js
const Tag = require('../models/tag');
const Post = require('../models/post');

exports.addTag = async (req, res) => {
    const { postId } = req.params;
    const { name } = req.body;
    
    try {
      // Check if the post exists
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      // Check if the tag already exists
      let tag = await Tag.findOne({ where: { name } });
      if (!tag) {
        // If the tag doesn't exist, create it
        tag = await Tag.create({ name });
      }
      
      // Add the tag to the post
      await post.addTag(tag);
      
      res.status(201).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.editTag = async (req, res) => {
    const { tagId } = req.params;
    const { name } = req.body;
    
    try {
      // Check if the tag exists
      let tag = await Tag.findByPk(tagId);
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      
      // Update the tag name
      await tag.update({ name });
      
      res.status(200).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  exports.deleteTag = async (req, res) => {
    const { tagId } = req.params;
    
    try {
      // Check if the tag exists
      const tag = await Tag.findByPk(tagId);
      if (!tag) {
        return res.status(404).json({ error: 'Tag not found' });
      }
      
      // Delete the tag
      await tag.destroy();
      
      res.status(204).send(); // No content
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
