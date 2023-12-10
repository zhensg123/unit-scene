<script lang="jsx">
export default {
  name: 'UnitDescriptionsRow',
  props: {
    row: {
      type: Array
    }
  },
  inject: ['UnitDescriptions'],
  render(h) {
    const { UnitDescriptions } = this;
    const row = (this.row || []).map(item => {
      return {
        ...item,
        label: item.slots.label || item.props.label,
        ...['labelClassName', 'contentClassName', 'labelStyle', 'contentStyle'].reduce((res, key) => {
          res[key] = item.props[key] || UnitDescriptions[key];
          return res;
        }, {})
      };
    });
    if (UnitDescriptions.direction === 'vertical') {
      return (
        <tbody>
          <tr class="el-descriptions-row">
            {
              row.map(item => {
                return (
                  <th
                    class={{
                      'el-descriptions-item__cell': true,
                      'el-descriptions-item__label': true,
                      'has-colon': UnitDescriptions.border ? false : UnitDescriptions.colon,
                      'is-bordered-label': UnitDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan={item.props.span}
                  >{item.label}</th>
                );
              })
            }
          </tr>
          <tr class="el-descriptions-row">
            {
              row.map(item =>{
                return (
                  <td
                    class={['el-descriptions-item__cell', 'el-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span}
                  >{item.slots.default}</td>
                );
              })
            }
          </tr>
        </tbody>
      );
    }
    if (UnitDescriptions.border) {
      return (
        <tbody>
          <tr class="el-descriptions-row">
            {
              row.map(item=> {
                return ([
                  <th
                    class={{
                      'el-descriptions-item__cell': true,
                      'el-descriptions-item__label': true,
                      'is-bordered-label': UnitDescriptions.border,
                      [item.labelClassName]: true
                    }}
                    style={item.labelStyle}
                    colSpan="1"
                  >{item.label}</th>,
                  <td
                    class={['el-descriptions-item__cell', 'el-descriptions-item__content', item.contentClassName]}
                    style={item.contentStyle}
                    colSpan={item.props.span * 2 - 1}
                  >{item.slots.default}</td>
                ]);
              })
            }
          </tr>
        </tbody>
      );
    }
    return (
      <tbody>
        <tr class="el-descriptions-row">
          {
            row.map(item=> {
              return (
                <td class="el-descriptions-item el-descriptions-item__cell" colSpan={item.props.span}>
                  <div class="el-descriptions-item__container">
                    <span
                      class={{
                        'el-descriptions-item__label': true,
                        'has-colon': UnitDescriptions.colon,
                        [item.labelClassName]: true
                      }}
                      style={item.labelStyle}
                    >{item.label}</span>
                    <span
                      class={['el-descriptions-item__content', item.contentClassName]}
                      style={item.contentStyle}
                    >{item.slots.default}</span>
                  </div>
                </td>);
            })
          }
        </tr>
      </tbody>
    );
  }
};
</script>