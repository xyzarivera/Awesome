# Focused Group Discussion on Computer Vision

This is based on our AI focused group discussion by @johnanthonyjose
2019

Deep Learning Crash Course
https://github.com/johnanthonyjose/deeplearning-crash-course

Convolutional Neural Networks for Visual Recognition
https://www.youtube.com/playlist?list=PLkt2uSq6rBVctENoVBg1TpCC7OQi31AlC
https://cs231n.github.io/

## Topics

### Convolutional Neural Networks

[Very Deep Convolutional Networks For Large Scale Image Recognition]

### VGG

It's all about deep neural network architecture. This is one of the classic image classification architecture wherein many of our recent algorithm uses it as a backbone. 

[Dropout: A Simple Way to Prevent Neural Networks from Overfitting]
Dropout. It's all about the concept of regularization. On how we can use it to make our ML algorithm be more robust on generalizing on our test set.

https://github.com/pytorch/examples/tree/master/imagenet

MNIST+LeNet in pytorch from scratch (we would then discuss how it is analogous to VGG with imagenet example)

https://github.com/Juxi/DeepLearnIntro.pytorch?fbclid=IwAR1QXKynC_5OzGfZkuiU7JQOb6YX8s0443BZ8OmPgWY-JU12Uq5wbH-UJOA

### ADAM

[ADAM: A Method for Stochastic Optimization.pdf]
https://arxiv.org/pdf/1412.6980.pdf

For this one, it's all about understanding the behaviours on how we optimize the weights of the network. We would understand the direction of the research on this field of optimization. 

### Rectified Linear Units for Normalization

[Rectifier Nonlinearities Improve Neural Network Acoustic Models.pdf]

### SSD 

[SSD: Single Shot MultiBox Detector.pdf]
https://arxiv.org/pdf/1512.02325.pdf

### R-CNN

[Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks.pdf]
https://arxiv.org/pdf/1506.01497.pdf

### GAN

https://github.com/reiinakano/gan-playground

### CVPR (Google)

[Accuracy Trade-offs for Modern Convolutional Object Detectors.pdf]

### RNN, LSTM, GRU

RNN = Recurrent Neural network. This kind of neural network is for recurring — so may parang pagka-cyclic siya — data, e.g. tidal data or stock prices. Popular for time series.

LSTM = specific part of RNN; so it's like a different kind of neuron. "If you consider the LSTM cell as a black box, it can be used very much like a basic cell, except it will perform much better; training will converge faster and it will detect long-term dependencies in the data. "

GRU = "simplified version of LSTM cell that seems to work better"
