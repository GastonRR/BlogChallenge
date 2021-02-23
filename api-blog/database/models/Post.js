module.exports = (sequelize,DataTypes) => {
    let alias = "Post"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		title: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'title'
		},
		content: {
			type: DataTypes.STRING(450),
			allowNull: false,
			field: 'content'
		},
		img: {
			type: DataTypes.STRING(450),
			allowNull: false,
			field: 'img'
		},
		creationTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'creationTime'
		},
		idCategory: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'category',
				key: 'id'
			},
			field: 'idCategory'
		}
    }
    let config = {
        tableName: 'post',
        timestamps: false
    }

    const Post = sequelize.define(alias,props,config);
    Post.associate = function(models){
        Post.belongsTo(models.Category,{
            as: 'Category',
            foreignKey:'idCategory'
        });
    }


    return Post;
}