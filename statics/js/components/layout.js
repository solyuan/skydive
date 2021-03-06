var getImagePath = function(label) {
	return 'statics/img/'+label+'.png';
};

var minusImg = getImagePath('minus-outline-16');
var plusImg = getImagePath('plus-16');
var captureIndicatorImg = getImagePath('media-record');
var pinIndicatorImg = getImagePath('pin');

var setupFixedImages = function(labelMap) {
  imgMap = {};
  Object.keys(labelMap).forEach(function(key) {
    imgMap[key] = getImagePath(labelMap[key]);
  });
  return imgMap;
};

var nodeImgMap = setupFixedImages({
  "host": "host",
  "port": "port",
  "ovsport": "port",
  "bridge": "bridge",
  "switch": "switch",
  "ovsbridge": "switch",
  "netns": "ns",
  "veth": "veth",
  "bond": "port",
  "cluster": "cluster",
  "container": "container",
  "daemonset": "daemonset",
  "deployment": "deployment",
  "ingress": "ingress",
  "job": "job",
  "node": "host",
  "persistentvolume": "persistentvolume",
  "persistentvolumeclaim": "persistentvolumeclaim",
  "pod": "pod",
  "networkpolicy": "networkpolicy",
  "namespace": "ns",
  "replicaset": "replicaset",
  "replicationcontroller": "replicationcontroller",
  "service": "service",
  "statefulset": "statefulset",
  "default": "intf",
});

var managerImgMap = setupFixedImages({
  "docker": "docker",
  "lxd": "lxd",
  "neutron": "openstack",
  "k8s": "k8s",
});
