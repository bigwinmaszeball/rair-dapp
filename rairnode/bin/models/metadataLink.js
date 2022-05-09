const mongoose = require('mongoose');

const { Schema } = mongoose;

const MetadataLink = new Schema({
  sourceURI: { type: String, required: false },
  metadata: { type: Schema.Types.ObjectId, ref: 'TokenMetadata' },
  uri: { type: String, required: false },
  contract: { type: Schema.Types.ObjectId, ref: 'Contract' },
  collectionIndex: { type: Number, required: false },
  tokenIndex: { type: Number, required: false },
  appendTokenIndex: { type: Boolean, required: true, default: true },
});

module.exports = MetadataLink;
