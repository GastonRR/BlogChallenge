module.exports = (sequelize,DataTypes) => {
    let alias = "Category"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		}
    }
    let config = {
        tableName: 'category',
        timestamps: false
    }

    const Category = sequelize.define(alias,props,config);
    Category.associate = function(models){
        Category.hasMany(models.Post,{
            as: 'Posts',
            foreignKey:'idCategory'
        });
	}
    return Category;
}