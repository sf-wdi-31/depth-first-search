##
# This class represents a tree 
# with _exactly_ _two_ _subtrees_
# (one or both of which may be nil).

class Tree
  attr_reader :key

  ##
  # :attr_reader: key
  # read the key of the tree's root
  #
  #  my_tree = Tree.new(5)
  #  my_tree.key
  #  #=> 5

  ##
  # Sets the key of the tree's root node
  # unless intended new key is nil
  # (to remove a node, set the entire node to nil)
  #
  #  my_tree = Tree.new(5)
  #  my_tree.key = 6
  #  #=> 6
  #
  #  my_tree.key = nil
  #  #=> 6

  def key=(new_key)
    if !new_key.nil?
      @key = new_key
    end
    @key
  end

  attr_accessor :children

  ##
  # :attr_accessor: children
  # sets or reads the array of children for this instance
  #
  #   my_tree = Tree.new(9)
  #   #=> #<Tree:0x007ff8a412a710 ... >
  #
  #   my_tree.children
  #   #=> []
  #
  #   my_tree.children << Tree.new(5)
  #
  #   my_tree.children
  #   #=> [<Tree:0x007ff73e00e690 ...>]

  ##
  # Creates a new tree 
  # with the root node key specified by +key+ param 
  # as the @key for the instance
  #
  #  my_tree = Tree.new(8)
  #  #=> #<Tree:0x007ff8a412a710 @key=8> 
  #  my_tree.key
  #  #=> 8

  def initialize(key)
    @key = key
    @children = []
  end
end