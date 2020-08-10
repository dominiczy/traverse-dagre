var _ = require("lodash");
var expect = require("./chai").expect;
var layout = require("..").layout;
var Graph = require("../lib/graphlib").Graph;
const util = require("util");

g = new Graph({ multigraph: true, compound: true })
      .setGraph({})
      .setDefaultEdgeLabel(function() { return {}; });

g.setEdge("lc", "ch1", { weight: 100 });
g.setEdge("ch1", "lc");
g.setEdge("lc", "ch2");
g.setEdge("lc", "ch2");
g.setEdge("ch1", "yi");
g.setEdge("ch1", "er");
g.setEdge("ch1", "san");
g.setEdge("ch1", "si");
g.setEdge("ch1", "wu");
g.setEdge("ch2", "yiersan");
g.setEdge("yiersan", "yi");
g.setEdge("yiersan", "er");
g.setEdge("yiersan", "san");
g.setNode("lc", { width: 100, height: 100 });
g.setNode("ch1", { width: 100, height: 100 });
g.setNode("ch2", { width: 100, height: 100 });
g.setNode("er", { width: 100, height: 100 });
g.setNode("yi", { width: 100, height: 100 });
g.setNode("san", { width: 100, height: 100 });
g.setNode("si", { width: 100, height: 100 });
g.setNode("wu", { width: 100, height: 100 });
g.setNode("yiersan", { width: 100, height: 100 });

const h = layout(g);
console.log(`h out with rank and order`, h);
