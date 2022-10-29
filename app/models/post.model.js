module.exports = (mongoose) => {
	// # Membuat Schema
	const schema = mongoose.Schema(
		{
			title: String,
			body: String,
			published: Boolean,
		},
		{
			timestamps: true,
		}
	);
	// => Membuat _id menjadi id
	schema.method("toJSON", function() {
		const {_v, _id, ...object} = this.toObject();
		object.id = _id;
		return object;
	});

	// # Membuat Model 
	const Post = mongoose.model("posts", schema);
	return Post;
}