  // try {
  //   return db('schemes as sc')
  //     .leftJoin('steps as st', 'sc.scheme_id', '=', 'st.scheme_id')
  //     .select('sc.scheme_name, st.*')
  //     .where('sc.scheme_id', '=', scheme_id)
  //     .orderBy('sc.scheme_id ');

  // } catch (error) {
  //   return (error);
  // }