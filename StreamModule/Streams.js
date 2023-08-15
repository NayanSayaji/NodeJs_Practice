//  Node.js Streams 
// Streams are objects that let you read data from a source or write data to a destination in continuous fashion.
// in Node.is, there are four types of streams 

// Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later 

// Readable - Stream which is used for read operation. 

// Writable - Stream which is used for write operation. 

// Duplex - Stream which can be used for both read and write operation 

// Transform - A type of duplex stream where the output is computed based on input.

// Each type of stream is a event emitter instance and throws several events at different instance of times. For example, some of the commonly used events are 

// data - This event is fired when there is data available to read 
// end - This event is fired when there is no more data to read 
// error - This event is fired when there is any error receiving or writing Data
// finish - This event is fired when all the data has been flushed to underlying system

